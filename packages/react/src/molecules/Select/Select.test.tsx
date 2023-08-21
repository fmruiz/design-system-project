import React from 'react';
import Select from './Select';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

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

test('render button', () => {
    // render screen
    render(<Select options={options} />);

    // comprobe if exist button
    const button = screen.getByTestId('dsfSelectButton');

    // assertions
    expect(button).toBeInTheDocument();
});

test('render button and select list', async () => {
    // render screen
    render(<Select options={options} />);

    // comprobe if exist button
    const button = screen.getByTestId('dsfSelectButton');

    await user.click(button);

    // comprobe if exist list
    const list = screen.getByTestId('dsfSelectList');

    // assertions
    expect(list).toBeInTheDocument();
});

test('render collection items', async () => {
    // render screen
    render(<Select options={options} />);

    // comprobe if exist button
    const button = screen.getByTestId('dsfSelectButton');

    await user.click(button);

    // comprobe if exists list and list items
    const list = screen.getByTestId('dsfSelectList');
    const listItems = screen.getAllByRole('listitem');

    // assertions
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
});

test('select the first item and comprobe the final value', async () => {
    // render screen
    render(<Select options={options} />);

    // comprobe if exist button
    const button = screen.getByTestId('dsfSelectButton');

    // assertions
    expect(button).toHaveTextContent('Please select an option');

    await user.click(button);

    // comprobe if exist list and list items
    const list = screen.getByTestId('dsfSelectList');
    const listItems = screen.getAllByRole('listitem');

    // assertions
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);

    // comprobe if exist first element of the list
    const firstItem = screen.getByTestId('dsfSelectItem-0');

    await user.click(firstItem);

    // assertions
    expect(button).toHaveTextContent('Strict Black');
});

test('select the first item and comprobe the final value', async () => {
    // render screen
    render(<Select options={options} />);

    // comprobe if exist button
    const button = screen.getByTestId('dsfSelectButton');

    // assertions
    expect(button).toHaveTextContent('Please select an option');

    await user.click(button);

    // comprobe if exist list and list items
    const list = screen.getByTestId('dsfSelectList');
    const listItems = screen.getAllByRole('listitem');

    // assertions
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);

    // comprobe if exist second element of the list
    const secondItem = screen.getByTestId('dsfSelectItem-1');

    await user.click(secondItem);

    // assertions
    expect(button).toHaveTextContent('Strict green');
});

test('select the first item and comprobe the final value', async () => {
    const newValues = [
        {
            label: 'Strict Black',
            value: 'strict-black',
        },
        {
            label: 'Strict green',
            value: 'strict-green',
        },
        {
            label: 'Strict blue',
            value: 'strict-blue',
        },
    ];

    // render screen
    render(<Select options={newValues} />);

    // comprobe if exist button
    const button = screen.getByTestId('dsfSelectButton');

    // assertions
    expect(button).toHaveTextContent('Please select an option');

    await user.click(button);

    // comprobe if exist list and list items
    const list = screen.getByTestId('dsfSelectList');
    const listItems = screen.getAllByRole('listitem');

    // assertions
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);

    // comprobe if exist third element of the list
    const thirdItem = screen.getByTestId('dsfSelectItem-2');

    await user.click(thirdItem);

    // assertions
    expect(button).toHaveTextContent('Strict blue');
});
