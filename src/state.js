import { createStore } from 'redux';


const INITAL_STATE = {
    metamask: false,
};


function log(str) {
    console.log('EVENT:' + str)
}


function reducer(state = INITAL_STATE, action) {
    log(action.type)
    switch(action.type) {
        case 'metamask':
            const e = action.payload.e;
            switch (e) {
                case 'available':
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

