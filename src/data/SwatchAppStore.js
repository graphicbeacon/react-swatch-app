import EventEmitter from 'events';
import SwatchAppDispatcher from '../utils/Dispatcher';
import SwatchAppConstants from './Constants';

class SwatchAppStore extends EventEmitter {
    constructor() {
        super();
        this.rgbValues = Object.assign({}, SwatchAppConstants.DEFAULT_RGB_VALUES);
    }
    
    save(swatchObj) {
        return window.localStorage.setItem(SwatchAppConstants.STORAGE_KEY, JSON.stringify(swatchObj));
    }

    reset() {
        window.localStorage.removeItem(SwatchAppConstants.STORAGE_KEY);
        this.rgbValues = Object.assign({}, SwatchAppConstants.DEFAULT_RGB_VALUES);
    }

    load() {
        let loadedRgbValues = window.localStorage.getItem(SwatchAppConstants.STORAGE_KEY);
        return loadedRgbValues ? JSON.parse(loadedRgbValues) : this.rgbValues;
    }
}

const swatchAppStore = new SwatchAppStore();

SwatchAppDispatcher.register(function(action) {
    switch(action.type) {
        case SwatchAppConstants.ACTIONS.save:
            swatchAppStore.save(action.data);
            swatchAppStore.emit(SwatchAppConstants.EVENTS.save);
        break;

        case SwatchAppConstants.ACTIONS.reset:
            swatchAppStore.reset();
            swatchAppStore.emit(SwatchAppConstants.EVENTS.reset);
        break;

        default:
    }
});

export default swatchAppStore;