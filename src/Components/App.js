import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';
import { createMatchups, setWeeklyMatchups } from '../helpers.js'

function App() {

    const [teams, setTeams] = useState(teamsData);
    const [history, setHistory] = useState([]);
    const currentMatchWeek = history.slice(-1)[0]

    // Get all matchups for the season
    const clubIds = teams.map(team => team.id)
    const matchups = createMatchups(clubIds)

    const weeklyMatchups = setWeeklyMatchups(matchups, teams.length)
    console.log(weeklyMatchups)


    function runMatchweek() {
        const nextMatchWeek = {
            'played': history.length + 1
        }
        const updatedHistory = [...history, nextMatchWeek]
        setHistory(updatedHistory)

        // console.log(teams)
        // let matchups = createMatchups([0,1,2,3])
        // console.log(matchups)
    }

    return (
        <div className="league-table">
            <Header handleClick={runMatchweek}/>
            <Table teams={teams} matchWeek={currentMatchWeek}/>
        </div>
    );
}

export default App;
