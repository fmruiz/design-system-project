import React from 'react';

interface ColorProps {
    hexCode: string;
    width: string;
    height: string;
}

const Color: React.FC<ColorProps> = ({
    hexCode,
    width,
    height,
}: ColorProps) => {
    return <div style={{ backgroundColor: hexCode, width, height }}>Color</div>;
};

export default Color;
