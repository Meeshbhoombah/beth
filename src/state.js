import { createStore } from 'redux';


const INITAL_STATE = {
    metamask: false,
};


export const ACTIONS = {
    METAMASK: 'metamask',
}

export const METAMASK = {
    AVAILABLE: 'available',
}


function log(str) {
    console.log('Chorable - EVENT: ' + str)
}


function reducer(state = INITAL_STATE, action) {
    switch(action.type) {
        case ACTIONS.METAMASK:
            const metamask = action.subtype;
            switch (metamask) {
                case METAMASK.AVAILABLE:
                    log('metamask/available');
                    return {
                        ...state,
                        metamask: true
                    }
                default:
                    return
            }
        default:
            return

    }
}


const store = createStore(reducer);
export default store;

