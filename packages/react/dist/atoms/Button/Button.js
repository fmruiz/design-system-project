import React from 'react';

const Button = ({ label, }) => {
    return React.createElement("button", { className: "dsf-button__container" }, label);
};

export { Button as default };
