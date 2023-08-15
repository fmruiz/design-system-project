import React from 'react';

const Select = ({ options = [], label = 'Please select an option', onOptionSelected, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onOptionClicked = (option, optionIdx) => {
        setIsOpen(!isOpen);
        if (onOptionSelected) {
            onOptionSelected(option, optionIdx);
        }
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: () => onLabelClick() }, label),
        isOpen && (React.createElement("ul", null, options.map((option, index) => {
            return (React.createElement("li", { onClick: () => onOptionClicked(option, index), key: option.value }, option.label));
        })))));
};

export { Select as default };
