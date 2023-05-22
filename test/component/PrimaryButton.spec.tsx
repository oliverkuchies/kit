import React from 'react';
import { render, screen } from '@testing-library/react';
import PrimaryButton from '@components/buttons/PrimaryButton';

test('renders primary button with correct text', () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
});

test('renders primary button with correct class', () => {
    render(<PrimaryButton className={'test123'}>Click me</PrimaryButton>);
    const buttonElement = screen.getByRole('button', { name: /click me/i});

    expect(buttonElement).toHaveClass('test123');
});