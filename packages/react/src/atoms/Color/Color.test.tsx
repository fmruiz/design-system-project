import React from 'react';
import Color from './Color';
import { render, screen } from '@testing-library/react';

const props = {
    rgb: 'rgb(255, 0, 66)',
};

test('first render', () => {
    // render screen
    render(<Color hexCode={props.rgb} />);

    // get component
    const color = screen.getByTestId('dsfColorContainer');

    // assertions
    expect(color).toBeInTheDocument();
});

test('control exact rgb in backgroundColor property', () => {
    // render screen
    render(<Color hexCode={props.rgb} />);

    // get component
    const color = screen.getByTestId('dsfColorContainer');

    // get styles of component
    const computedStyles = getComputedStyle(color);
    const backgroundColor = computedStyles.backgroundColor;

    // assertions
    expect(backgroundColor).toBe('rgb(255, 0, 66)');
});

test('control how change background color using differents rgb values', () => {
    // mock info
    const props = {
        rgb: 'rgb(0, 0, 0)',
    };

    // render screen
    render(<Color hexCode={props.rgb} />);

    // get component
    const color = screen.getByTestId('dsfColorContainer');

    // get styles of component
    const computedStyles = getComputedStyle(color);
    const backgroundColor = computedStyles.backgroundColor;

    // assertions
    expect(backgroundColor).toBe('rgb(0, 0, 0)');
});
