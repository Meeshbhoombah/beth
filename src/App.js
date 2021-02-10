import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';


import store from './store';
import Init from './Init';
import Dashboard from './Dashboard';


function getLibrary() {
    return new ethers.providers.Web3Provider(window.ethereum);
};


function App() {
    return (
        // @web3-react/core requires passing chosen convience library
        <Provider store={store}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Switch>
                    <Route path="/">
                        <Init />
                    </Route>
                    <Route path="/u/:address">
                        <Dashboard />
                    </Route>
                </Switch>
            </Web3ReactProvider>
        </Provider>
    );
};


export default hot(App);

