import { configureStore } from '@reduxjs/tookit';


import web3StorageReducer from './state/web3';


export default configure({
    reducer: {
        web3Storage: web3StorageReducer
    },
});

