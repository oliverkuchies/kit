import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');
const fs = require('fs');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    const tsConfigPath = path.resolve(__dirname, '../tsconfig.json');
    const tsConfigContents = fs.readFileSync(tsConfigPath, 'utf-8');
    const compilerOptions = JSON.parse(tsConfigContents).compilerOptions;
    const paths = compilerOptions.paths;

    config.resolve.alias = {
      ...config.resolve.alias,
      ...paths
    };

    return config;
  }
};
export default config;
