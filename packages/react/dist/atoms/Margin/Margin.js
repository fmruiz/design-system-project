import React from 'react';

const Margin = ({ space = 'sm', children, left, right, top, bottom, }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className = `dsf-margin-${space}`;
    }
    if (left) {
        className = `${className} dsf-margin-left-${space}`;
    }
    if (right) {
        className = `${className} dsf-margin-right-${space}`;
    }
    if (top) {
        className = `${className} dsf-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} dsf-margin-bottom-${space}`;
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
