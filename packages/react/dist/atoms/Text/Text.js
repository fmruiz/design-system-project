import React from 'react';

const Text = ({ size = 'base', children }) => {
    const className = `dsf-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
