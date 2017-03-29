import EventEmitter from 'events';
import SwatchAppDispatcher from '../utils/Dispatcher';

class SwatchAppStore extends EventEmitter {
    constructor() {
        super();
        this.swatchStorageKey = 'SWATCH_APP_RGB';
        this.rgbValues = {
            r: 120,
            g: 120,
            b: 120
        };
    }
    
    save(swatchObj) {
        return window.localStorage.setItem(this.swatchStorageKey, JSON.stringify(swatchObj));
    }

    reset() {
        window.localStorage.removeItem(this.swatchStorageKey);
        this.rgbValues = Object.assign({}, this.rgbValues);
    }

    load() {
        let loadedRgbValues = window.localStorage.getItem(this.swatchStorageKey);
        return loadedRgbValues ? JSON.parse(loadedRgbValues) : this.rgbValues;
    }
}

const swatchAppStore = new SwatchAppStore();

SwatchAppDispatcher.register(function(action) {
    switch(action.type) {
        case 'SAVE_RGB':
            swatchAppStore.save(action.data);
            swatchAppStore.emit('saved rgb');
        break;

        case 'RESET_RGB':
            swatchAppStore.reset();
            swatchAppStore.emit('reset rgb');
        break;

        default:
    }
});

export default swatchAppStore;