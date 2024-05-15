
import React from 'react';
import './Tooltip.css'

const Tooltip = ({ children, content, color }) => {
    return (
        <span className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
            {children}
            <span className="tooltiptext" style={{ visibility: 'hidden', backgroundColor: color }}>
                {content}
            </span>
        </span>
    );
};

export default Tooltip;
