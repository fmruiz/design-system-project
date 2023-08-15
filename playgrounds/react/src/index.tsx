import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from '@ds.f/react';
import '@ds.f/scss/src/lib/Margin.css';
import '@ds.f/scss/src/lib/Text.css';

const options = [
    {
        label: 'Strict Black',
        value: 'strict-black',
    },
    {
        label: 'Strict Black',
        value: 'strict-black',
    },
];

ReactDOM.render(<Select options={options} />, document.querySelector('#root'));
