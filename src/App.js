import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';


import { ethers } from 'ethers';


import Init from './Init';


function getWeb3Provider() {
    return new ethers.providers.Web3Provider(window.ethereum);
};


function App() {
    return (
        <Switch>
            <Route path="/">
                <Init />
            </Route>
        </Switch>
    );
};


export default hot(App);

