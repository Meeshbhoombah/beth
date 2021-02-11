import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';


import { ethers } from 'ethers';


import Init from './views/Init';


function getEthers() {
    return new ethers.providers.Web3Provider(window.ethereum);
};


function App() {
    useEffect(() => {
        console.log(getEthers());
    }, []);

    return (
        <Switch>
            <Route path="/">
                <Init />
            </Route>
        </Switch>
    );
};


export default hot(App);

