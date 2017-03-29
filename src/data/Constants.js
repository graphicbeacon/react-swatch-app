const SwatchAppConstants = {
    STORAGE_KEY: 'Swatch App RGB Values',
    DEFAULT_RGB_VALUES: {
        r: 120,
        g: 120,
        b: 120
    },
    ACTIONS: {
        save: 'SAVE_SWATCH',
        reset: 'RESET_SWATCH'
    },
    EVENTS: {
        save: 'saved rgb',
        reset: 'reset rgb'
    }
};

export default SwatchAppConstants;