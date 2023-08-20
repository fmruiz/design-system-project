import React from 'react';
import Select from './Select';
import { fireEvent, render } from '@testing-library/react';

const options = [
    {
        label: 'Strict Black',
        value: 'strict-black',
    },
    {
        label: 'Strict green',
        value: 'strict-green',
    },
];

test('renders all options passed to it', () => {
    const { getByTestId } = render(<Select options={options} />);

    const button = getByTestId('dsfSelectButton');

    fireEvent.click(button);

    const list = getByTestId('dsfSelectList');

    expect(list).toBeTruthy();
});
