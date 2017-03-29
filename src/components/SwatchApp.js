import React from 'react';
import SwatchPreview from './SwatchPreview';
import SwatchSlider from './SwatchSlider';
import SwatchAppStore from '../data/SwatchAppStore';
import SwatchAppDispatcher from '../utils/Dispatcher';
import SwatchAppConstants from '../data/Constants';

class SwatchApp extends React.Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            swatchValues: SwatchAppStore.load()
        };

        this.update = this.update.bind(this);
        this.savePreview = this.savePreview.bind(this);
    }

    componentDidMount() {
        SwatchAppStore.on(SwatchAppConstants.EVENTS.save, (rgb) => {
            window.alert('Saved RGB')
        });

        SwatchAppStore.on(SwatchAppConstants.EVENTS.reset, () => {
            window.alert('Reset RGB');
            this.setState({
                swatchValues: SwatchAppStore.load()
            });
        });
    }

    savePreview() {
        SwatchAppDispatcher.dispatch({
            type: SwatchAppConstants.ACTIONS.save,
            data: this.state.swatchValues
        });
    }

    resetPreview() {
        SwatchAppDispatcher.dispatch({
            type: SwatchAppConstants.ACTIONS.reset
        });
    }

    update(lastSwatchUpdate) {
        let updateObject = Object.assign({}, this.state.swatchValues);

        // Update latest swatch
        updateObject[lastSwatchUpdate.color] = lastSwatchUpdate.value;

        // Rerender component
        this.setState({
            swatchValues: updateObject
        });
    }

    render() {
        return (
            <div className="swatch-app">
            <SwatchPreview bgColor={this.state.swatchValues} onSave={this.savePreview} onReset={this.resetPreview}>
                <SwatchSlider min="0" max="255" step="1" color="r" value={this.state.swatchValues.r} onChange={this.update} />
                <SwatchSlider min="0" max="255" step="1" color="g" value={this.state.swatchValues.g} onChange={this.update} />
                <SwatchSlider min="0" max="255" step="1" color="b" value={this.state.swatchValues.b} onChange={this.update} />
            </SwatchPreview>
            </div>
        );
    }
}

export default SwatchApp;