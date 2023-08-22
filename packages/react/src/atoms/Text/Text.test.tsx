import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('render Text component', () => {
    // render screen
    render(<Text>Hola Mundo!</Text>);

    // get component
    const text = screen.getByTestId('dsfText');

    // assertions
    expect(text).toBeInTheDocument();
});

test('comprobe text value', () => {
    // render screen
    render(<Text>Hola Mundo!</Text>);

    // get component
    const text = screen.getByTestId('dsfText');

    // assertions
    expect(text).toHaveTextContent('Hola Mundo!');
});

test('comprobe the initial value of classname', () => {
    // render screen
    render(<Text>Hola Mundo!</Text>);

    // get component
    const text = screen.getByTestId('dsfText');

    // assertions
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('dsf-text-base');
});

test('comprobe how change the classname', () => {
    // render screen
    render(<Text size="sm">Hola Mundo!</Text>);

    // get component
    const text = screen.getByTestId('dsfText');

    // assertions
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('dsf-text-sm');
});
