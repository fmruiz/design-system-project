import React from 'react';
import { Spacing } from '@ds.f/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `dsf-width-${width} dsf-height-${height}`;
    return (React.createElement("div", { style: { backgroundColor: hexCode }, className: className }));
};

export { Color as default };
