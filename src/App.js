import React from 'react';
import { hot } from 'react-hot-loader/root';

function App() {
    const msg = "Test"

    return (
        <div>
            <h1>{msg}</h1>
        </div>
    );
};


export default hot(App);

