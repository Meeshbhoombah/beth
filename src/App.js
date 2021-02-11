import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';


// import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';


import Init from './views/Init';


function getEthers() {
    return new Web3Provider(window.ethereum);
};


function App() {
    useEffect(() => {
        console.log(getEthers());
    })

    return (
        <Web3ReactProvider getLibrary={getEthers}>
            <Switch>
                <Route path="/">
                    <Init />
                </Route>
            </Switch>
        </Web3ReactProvider>
    );
};


export default hot(App);

