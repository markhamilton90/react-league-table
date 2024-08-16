import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';
import { createSchedule } from '../helpers.js'

function App() {

    const [teams, setTeams] = useState(teamsData)
    const [history, setHistory] = useState([])
    const lastMatchWeek = history.slice(-1)[0]

    const clubs = teams.map(team => team.id)
    const [schedule, setSchedule] = useState(createSchedule(clubs))

    const nextMatches = schedule[history.length]

    function runMatchweek() {
        const nextMatchWeek = {
            'played': history.length + 1,
            'fixtures': schedule[history.length]
        }
        const updatedHistory = [...history, nextMatchWeek]
        setHistory(updatedHistory)
    }

    return (
        <div className="league-table">
            <Header handleClick={runMatchweek}/>
            <Table teams={teams} lastMatchWeek={lastMatchWeek} nextMatches={nextMatches}/>
        </div>
    );
}

export default App;
