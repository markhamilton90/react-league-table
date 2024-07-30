import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';

function App() {

    const [teams, setTeams] = useState(teamsData);

    return (
        <div className="league-table">
            <Header />
            <Table teams={teams}/>
        </div>
    );
}

export default App;
