import React from 'react';
import Text from '../../atoms/Text';

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
    const labelRef = React.useRef<HTMLButtonElement>(null);

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = React.useState<null | number>(
        null
    );
    const [overlayTop, setOverlayTop] = React.useState<
        string | number | undefined
    >(undefined);

    const onOptionClicked = (option: SelectOption, optionIdx: number) => {
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

    return (
        <div className="dsf-select">
            <button
                className="dsf-select__label"
                onClick={() => onLabelClick()}
                ref={labelRef}
            >
                <Text>
                    {selectedOption === null ? label : selectedOption.label}
                </Text>
            </button>

            {isOpen && (
                <ul style={{ top: overlayTop }} className="dsf-select__overlay">
                    {options.map((option, index) => {
                        const isSelected = selectedIndex === index;

                        return (
                            <li
                                onClick={() => onOptionClicked(option, index)}
                                key={option.value}
                                className={`dsf-select__option ${
                                    isSelected
                                        ? 'dsf-select__option--selected'
                                        : ''
                                }`}
                            >
                                <Text>{option.label}</Text>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Select;
