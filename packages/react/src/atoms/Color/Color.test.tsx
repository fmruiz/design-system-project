import React from 'react';
import Color from './Color';
import { render, screen } from '@testing-library/react';

const props = {
    rgb: 'rgb(255, 0, 66)',
};

test('first render', () => {
    render(<Color hexCode={props.rgb} />);

    const color = screen.getByTestId('dsfColorContainer');

    expect(color).toBeInTheDocument();
});

test('control exact rgb in backgroundColor property', () => {
    render(<Color hexCode={props.rgb} />);

    const color = screen.getByTestId('dsfColorContainer');

    const computedStyles = getComputedStyle(color);
    const backgroundColor = computedStyles.backgroundColor;

    expect(backgroundColor).toBe('rgb(255, 0, 66)');
});

test('control how change background color using differents rgb values', () => {
    const props = {
        rgb: 'rgb(0, 0, 0)',
    };

    render(<Color hexCode={props.rgb} />);

    const color = screen.getByTestId('dsfColorContainer');

    const computedStyles = getComputedStyle(color);
    const backgroundColor = computedStyles.backgroundColor;

    expect(backgroundColor).toBe('rgb(0, 0, 0)');
});
