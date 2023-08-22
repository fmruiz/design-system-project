import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('render Text component', () => {
    render(<Text>Hola Mundo!</Text>);

    const text = screen.getByTestId('dsfText');

    expect(text).toBeInTheDocument();
});

test('comprobe text value', () => {
    render(<Text>Hola Mundo!</Text>);

    const text = screen.getByTestId('dsfText');

    expect(text).toHaveTextContent('Hola Mundo!');
});

test('comprobe the initial value of classname', () => {
    render(<Text>Hola Mundo!</Text>);

    const text = screen.getByTestId('dsfText');

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('dsf-text-base');
});

test('comprobe how change the classname', () => {
    render(<Text size="sm">Hola Mundo!</Text>);

    const text = screen.getByTestId('dsfText');

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('dsf-text-sm');
});
