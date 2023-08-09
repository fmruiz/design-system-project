import React from 'react';
import ReactDOM from 'react-dom';

import { Text, Margin } from '@ds.f/react';
import '@ds.f/scss/src/lib/Margin.css';
import '@ds.f/scss/src/lib/Text.css';

ReactDOM.render(
    <Margin left space="xl">
        <Text>Test</Text>
    </Margin>,
    document.querySelector('#root')
);
