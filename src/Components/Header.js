import { useState } from 'react';
import Simulator from './Simulator';

function Header({handleClick}) {
    return (
        <header>
            <h1>League Table</h1>
            <Simulator handleClick={handleClick}/>
        </header>
    )
}

export default Header;
