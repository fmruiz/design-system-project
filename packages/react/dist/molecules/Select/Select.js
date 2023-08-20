import React from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = 'Please select an option', onOptionSelected, }) => {
    const labelRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [overlayTop, setOverlayTop] = React.useState(undefined);
    const onOptionClicked = (option, optionIdx) => {
        if (onOptionSelected) {
            onOptionSelected(option, optionIdx);
        }
        setSelectedIndex(optionIdx);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    React.useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: "dsf-select" },
        React.createElement("button", { "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": "dsf-select-list", className: "dsf-select__label", onClick: () => onLabelClick(), ref: labelRef },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label)),
        isOpen && (React.createElement("ul", { id: "dsf-select-list", role: "menu", style: { top: overlayTop }, className: "dsf-select__overlay" }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            return (React.createElement("li", { onClick: () => onOptionClicked(option, index), key: option.value, className: `dsf-select__option ${isSelected
                    ? 'dsf-select__option--selected'
                    : ''}` },
                React.createElement(Text, null, option.label)));
        })))));
};

export { Select as default };
