import React from 'react';
import SwatchSelectSlider from './SwatchSelectSlider';

class SwatchSelectApp extends React.Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            swatchValues: {
                r: 0,
                g: 0,
                b: 0
            }
        }

        this.update = this.update.bind(this);
    }

    update(lastSwatchUpdate) {
        let updateObject = this.state.swatchValues;

        // Update latest swatch
        updateObject[lastSwatchUpdate.color] = lastSwatchUpdate.value;

        // Rerender component
        this.setState({
            swatchValues: updateObject
        })
    }

    render() {
        return (
            <div className="swatch-select-app">
                <SwatchPreview bgColor={this.state.swatchValues} />
                <SwatchSelectSlider min="0" max="255" step="1" color="r" onChange={this.update} />
                <SwatchSelectSlider min="0" max="255" step="1" color="g" onChange={this.update} />
                <SwatchSelectSlider min="0" max="255" step="1" color="b" onChange={this.update} />
            </div>
        );
    }
}

const SwatchPreview = function(props) {
    return <div 
        className="swatch-select-app__preview-box"
        style={{backgroundColor: `rgb(${props.bgColor.r}, ${props.bgColor.g}, ${props.bgColor.b})`}}
    >&nbsp;</div>
}

export default SwatchSelectApp;