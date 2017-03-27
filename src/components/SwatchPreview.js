import React from 'react';

const SwatchPreview = function(props) {
    return (
        <div 
            className="swatch-app__preview-box"
            style={{backgroundColor: `rgb(${props.bgColor.r}, ${props.bgColor.g}, ${props.bgColor.b})`}}>
            <div className="swatch-app__preview-box__controls">
                {props.children}
            </div>
        </div>
    )
}

export default SwatchPreview;