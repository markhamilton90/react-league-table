import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';
import { createSchedule, playMatch } from '../helpers.js'

function App() {

    const [teams, setTeams] = useState(teamsData)
    const [history, setHistory] = useState([])
    const lastMatchWeek = history.slice(-1)[0]

    const clubs = teams.map(team => team.id)
    const [schedule, setSchedule] = useState(createSchedule(clubs))

    const totalWeeks = clubs.length - 1
    const seasonComplete = history.length >= totalWeeks

    const nextMatches = schedule[history.length]

    function runMatchweek() {

        const nextMatchWeek = {
            'played': history.length + 1,
            'fixtures': schedule[history.length]
        }
        const updatedHistory = [...history, nextMatchWeek]
        setHistory(updatedHistory)

        // let played = playMatch(teams[0], teams[1])
        // console.log(played)
    }

    return (
        <div className="league-table">
            <Header handleClick={runMatchweek} seasonComplete={seasonComplete}/>
            <Table teams={teams} lastMatchWeek={lastMatchWeek} nextMatches={nextMatches}/>
        </div>
    );
}

export default App;
