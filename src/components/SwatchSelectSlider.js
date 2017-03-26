import React, { Component } from 'react';

class SwatchSelectSlider extends Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            value: props.value
        }
    }

    update(e) {
        let targetValue = e.target.value;
        this.setState({value: targetValue})
        this.setChange(targetValue)
    }

    setChange(updatedValue) {
        this.props.onChange({
            color: this.props.color,
            value: updatedValue
        });
    }
    
    componentDidMount() {
        this.setChange(this.props.value);
    }

    render() {
        return (
            <div>
                <input 
                    type="range" 
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.state.value}
                    onChange={this.update.bind(this)}
                />
                <input 
                    type="number" 
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.state.value}
                    onChange={this.update.bind(this)}
                />
            </div>
        );
    }
}

SwatchSelectSlider.defaultProps = {
    value: 0
}

export default SwatchSelectSlider;