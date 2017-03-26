import React from 'react';
import SwatchPreview from './SwatchPreview';
import SwatchSlider from './SwatchSlider';

class SwatchApp extends React.Component {
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
            <div className="swatch-app">
            <SwatchPreview bgColor={this.state.swatchValues}>
                <SwatchSlider min="0" max="255" step="1" color="r" value="120" onChange={this.update} />
                <SwatchSlider min="0" max="255" step="1" color="g" value="120" onChange={this.update} />
                <SwatchSlider min="0" max="255" step="1" color="b" value="120" onChange={this.update} />
            </SwatchPreview>
            </div>
        );
    }
}

export default SwatchApp;