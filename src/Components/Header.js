import { useState } from 'react';
import Simulator from './Simulator';

function Header({handleClick, seasonComplete}) {
    return (
        <header>
            <div className="container-wide">
                <h1>League Table</h1>
                <Simulator handleClick={handleClick} seasonComplete={seasonComplete}/>
            </div>
        </header>
    )
}

export default Header;
