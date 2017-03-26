import React from 'react';

class SwatchPreview extends React.Component {
    render() {
        return (
            <div 
                className="swatch-app__preview-box"
                style={{backgroundColor: `rgb(${this.props.bgColor.r}, ${this.props.bgColor.g}, ${this.props.bgColor.b})`}}>
                <div className="swatch-app__preview-box__controls">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default SwatchPreview;