import React, { useState, useEffect } from 'react';


// Check if Metamask is injected via the state,
// if it is not, display Please Download Metamask
function Init() {
    return (
        <div>
            <h1>Metamask is injected.</h1>
            <h1>Metamask is NOT injected.</h1>
        </div>
    )
}


export default Init;

