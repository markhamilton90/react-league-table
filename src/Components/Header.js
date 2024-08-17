import { useState } from 'react';
import Simulator from './Simulator';

function Header({handleClick, seasonComplete}) {
    return (
        <header>
            <h1>League Table</h1>
            <Simulator handleClick={handleClick} seasonComplete={seasonComplete}/>
        </header>
    )
}

export default Header;
