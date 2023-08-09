import React from 'react';
import { Spacing } from '@ds.f/foundation';

interface ColorProps {
    hexCode: string;
    width?: string;
    height?: string;
}

const Color: React.FC<ColorProps> = ({
    hexCode,
    width = Spacing.sm,
    height = Spacing.sm,
}: ColorProps) => {
    const className = `dsf-width-${width} dsf-height-${height}`;

    return (
        <div style={{ backgroundColor: hexCode }} className={className}></div>
    );
};

export default Color;
