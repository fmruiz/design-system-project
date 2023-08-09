import React from 'react';

const Color = ({ hexCode }) => {
    return React.createElement("div", { style: { backgroundColor: hexCode } }, "Color");
};

export { Color as default };
