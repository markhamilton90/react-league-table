import { useState } from 'react';
import Simulator from './Simulator';

function Header() {
    return (
        <header>
            <h1>League Table</h1>
            <Simulator />
        </header>
    )
}

export default Header;
