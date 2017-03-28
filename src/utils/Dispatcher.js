class Dispatcher {
    constructor() {
        this._lastId = 0;
        this._callbacks = {};
    }

    register(callback) {
        let id = `CID_${this._lastId++}`;
        this._callbacks[id] = callback;
        return id;
    }

    dispatch(action) {
        for (let id in this._callbacks) {
            this._callbacks[id](action);
        }
    }

    waitFor(ids) {
        // TODO: Implement example if possible
    }
}

const SwatchAppDispatcher = new Dispatcher();

export default SwatchAppDispatcher;