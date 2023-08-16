import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from '@ds.f/react';
import '@ds.f/scss/src/lib/Margin.css';
import '@ds.f/scss/src/lib/Text.css';
import '@ds.f/scss/src/lib/Select.css';

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

ReactDOM.render(<Select options={options} />, document.querySelector('#root'));
