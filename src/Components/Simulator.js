import { useState } from 'react';

function Simulator({handleClick, seasonComplete}) {
    return (
        <button onClick={handleClick} disabled={seasonComplete}>
            Run Simulation
        </button>
    )
}

export default Simulator;
