import React from 'react';
import { Spacing } from '@ds.f/foundation';

interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
}

const Margin: React.FC<MarginProps> = ({
    space = 'sm',
    children,
    left,
    right,
    top,
    bottom,
}: MarginProps) => {
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

    return <div className={className}>{children}</div>;
};

export default Margin;
