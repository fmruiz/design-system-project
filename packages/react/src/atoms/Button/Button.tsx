import React from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
    label,
}: ButtonProps) => {
    return <button className="dsf-button__container">{label}</button>;
};

export default Button;
