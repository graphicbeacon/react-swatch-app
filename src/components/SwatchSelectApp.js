import React from 'react';

class SwatchSelectApp extends React.Component {
    render() {
        return (
            <div className="swatch-select-app">
                {this.props.children}
            </div>
        );
    }
}

export default SwatchSelectApp;