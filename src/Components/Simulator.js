import { useState } from 'react';

function Simulator({handleClick}) {
    return (
        <button onClick={handleClick}>
            Run Simulation
        </button>
    )
}

export default Simulator;
