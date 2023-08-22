import React from 'react';
import { render, screen } from '@testing-library/react';
import Margin from './Margin';

test('render Margin component', () => {
    // render screen
    render(
        <Margin>
            <p>Hola Mundo</p>
        </Margin>
    );

    // get component
    const margin = screen.getByTestId('dsfMargin');

    // assertions
    expect(margin).toBeInTheDocument();
    expect(margin).toHaveClass('dsf-margin-sm');
});

test('check if classname change', () => {
    // render screen
    render(
        <Margin left>
            <p>Hola Mundo</p>
        </Margin>
    );

    // get component
    const margin = screen.getByTestId('dsfMargin');

    // assertions
    expect(margin).toBeInTheDocument();
    expect(margin).toHaveClass('dsf-margin-left-sm');
});
