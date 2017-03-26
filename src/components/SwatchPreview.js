import React from 'react';

class SwatchPreview extends React.Component {
    render() {
        return (
            <div 
                className="swatch-app__preview-box"
                style={{backgroundColor: `rgb(${this.props.bgColor.r}, ${this.props.bgColor.g}, ${this.props.bgColor.b})`}}
            >{this.props.children}</div>
        )
    }
}

export default SwatchPreview;