import { createSlice } from '@reduxjs/toolkit';


const initalState = [
    { id: 1, name: "Test" },
    { id: 2, name: "Test2" },
]


const web3Storeage = createSlice({
    name: 'web3',
    initalState,
    reducers: {}
})


export default web3Storeage.reducers;

