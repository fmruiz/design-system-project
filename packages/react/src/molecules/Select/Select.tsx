import React from 'react';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIdx: number) => void;
    options?: SelectOption[];
    label?: string;
}

const Select: React.FC<SelectProps> = ({
    options = [],
    label = 'Please select an option',
    onOptionSelected,
}: SelectProps) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const onOptionClicked = (option: SelectOption, optionIdx: number) => {
        setIsOpen(!isOpen);
        if (onOptionSelected) {
            onOptionSelected(option, optionIdx);
        }
    };

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={() => onLabelClick()}>{label}</button>

            {isOpen && (
                <ul>
                    {options.map((option, index) => {
                        return (
                            <li
                                onClick={() => onOptionClicked(option, index)}
                                key={option.value}
                            >
                                {option.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default Select;
