import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';


import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';


import Init from './Init';
import Dashboard from './Dashboard';


// @web3-react/core requires passing chosen convience
function getLibrary() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    return provider;
};


function App() {
    return (
        <Web3ReactProvider getLibrary = {getLibrary()}>
            <Switch>
                <Route path="/">
                    <Init />
                </Route>
                <Route path="/u/:address">
                    <Dashboard />
                </Route>
            </Switch>
        </Web3ReactProvider>
    );
};


export default hot(App);

