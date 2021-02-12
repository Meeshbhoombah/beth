import { createStore } from 'redux';


const INITAL_STATE = {
    metamask: false,
};

const ACTIONS = {
    METAMASK: 'metamask',
}


function log(str) {
    console.log('Chorable - EVENT: ' + str)
}


function reducer(state = INITAL_STATE, action) {
    console.log(action.type);
    console.log(ACTIONS.METAMASK);

    switch(action.type) {
        case ACTIONS.METAMASK:
            const e = action.subtype;
            switch (e) {
                case 'available':
                    log('metamask/available');
                    return {
                        ...state,
                        metamask: true
                    }
                default:
                    return
            }
        default:
            console.log('test');
            return
    }
}


const store = createStore(reducer);
export default store;

