import React from 'react';

class SwatchSlider extends React.Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            value: props.value
        }
    }

    update(e) {
        let targetValue = isNaN(e.target.value) ? 0 : parseFloat(e.target.value);
        this.setState({value: this.validateRange(targetValue)})
        this.setChange(this.validateRange(targetValue))
    }

    validateRange(currentValue) {
        let setValue = currentValue;
        
        // Ensure set value is within range
        if (currentValue > this.props.max) {
            setValue = this.props.max;
        } else if (currentValue < this.props.min) {
            setValue = this.props.min;
        }

        return setValue;
    }

    setChange(updatedValue) {
        this.props.onChange({
            color: this.props.color,
            value: updatedValue
        });
    }
    
    componentDidMount() {
        this.setChange(this.validateRange(this.props.value));
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

SwatchSlider.defaultProps = {
    value: 0
}

export default SwatchSlider;