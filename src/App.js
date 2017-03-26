import React, { Component } from 'react';
import SwatchSelectApp from './components/SwatchSelectApp';
import SwatchSelectSlider from './components/SwatchSelectSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SwatchSelectApp>
        <SwatchSelectSlider />
        <SwatchSelectSlider />
        <SwatchSelectSlider />
      </SwatchSelectApp>
      </div>
    );
  }
}

export default App;
