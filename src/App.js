import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';


import state from './state';
import Init from './views/Init';


function App() {
    return (
        <Provider store={state}>
            <Switch>
                <Route path="/">
                    <Init />
                </Route>
            </Switch>
        </Provider>
    );
};


export default hot(App);

