import React from 'react';


import { useWeb3React } from '@web3-react/core';


function Init() {
    const context = useWeb3React();

    return (
        <h1>Testing</h1>
    )
}

export default Init;

