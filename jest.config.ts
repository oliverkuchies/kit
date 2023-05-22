const fs = require('fs');
const path = require('path');
const tsConfigPath = path.resolve(__dirname, './tsconfig.json');
const tsConfigContents = fs.readFileSync(tsConfigPath, 'utf-8');
const compilerOptions = JSON.parse(tsConfigContents).compilerOptions;
const paths = compilerOptions.paths;

interface Paths {
    [key: string]: string;
}

// Jest & Tsconfig support different expressions, parse them to match
const moduleNameMapper : [string, string][] = Object.entries<Paths>(paths).map(([key, value]) => {
    const keyWithoutWildcard = key.replace('/*', '');

    const entry : string = value[0];

    const valueWithoutWildcard = entry.replace('/*', '').replace('./', '');
    return [`^${keyWithoutWildcard}/(.*)$`, `<rootDir>/src/${valueWithoutWildcard}/$1`];
});

//Convert to object
const moduleNameMapperObject = Object.fromEntries(moduleNameMapper);

module.exports = {
    rootDir: './',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        ...moduleNameMapperObject,
        '.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    "collectCoverage": true,
    "coverageReporters": ["json", "html", "text"],
};