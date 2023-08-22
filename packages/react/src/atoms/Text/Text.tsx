import React from 'react';
import { FontSize } from '@ds.f/foundation';

interface TextProps {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size = 'base', children }: TextProps) => {
    const className = `dsf-text-${size}`;

    return (
        <p className={className} data-testid="dsfText">
            {children}
        </p>
    );
};

export default Text;
