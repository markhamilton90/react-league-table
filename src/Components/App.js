import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';
import { createSchedule, playGames, updateTeamStats } from '../helpers.js'

function App() {

    const [teams, setTeams] = useState(teamsData)
    const [history, setHistory] = useState([])
    const clubs = teams.map(team => team.id)
    const [schedule, setSchedule] = useState(createSchedule(clubs))
    const [currentWeek, setCurrentWeek] = useState(0)

    const totalWeeks = clubs.length - 1
    const seasonComplete = history.length >= totalWeeks

    const lastMatchWeek = history.slice(-1)[0]
    const nextMatches = schedule[history.length]

    function runMatchweek() {

        // Generate match outcomes
        const currentTeams = [...teams]
        const currentFixtures = schedule[currentWeek]
        const results = playGames(currentFixtures)

        // Update points and placement of teams
        const nextTeams = calculatePoints(results, currentFixtures, currentTeams)
        const nextSortedTeams = reorderTeams(nextTeams)
        setTeams([...nextSortedTeams])

        // Update the history
        const nextHistoryEntry = {
            'played': history.length + 1,
            'fixtures': schedule[history.length]
        }

        setHistory([...history, nextHistoryEntry])
        setCurrentWeek(currentWeek + 1)
    }

    function calculatePoints(results, fixtures, teams) {

        results.forEach( (res, i) => {
            const [teamA, teamB] = fixtures[i].split('-').map(Number)

            switch (res[0]) {
                // Outcome was a draw
                case 1:
                    teams[teamA]['drawn'] += 1
                    teams[teamA]['points'] += 1
                    teams[teamB]['drawn'] += 1
                    teams[teamB]['points'] += 1

                    teams[teamA]['results'].push(1)
                    teams[teamB]['results'].push(1)

                    break
                // Team A lost to team B
                case 0:
                    teams[teamA]['lost'] += 1
                    teams[teamB]['won'] += 1
                    teams[teamB]['points'] += 3

                    teams[teamA]['results'].push(0)
                    teams[teamB]['results'].push(3)

                    break
                // Team A won against team B
                case 3:
                    teams[teamA]['won'] += 1
                    teams[teamA]['points'] += 3
                    teams[teamB]['lost'] += 1

                    teams[teamA]['results'].push(3)
                    teams[teamB]['results'].push(0)

                    break
            }
        })

        return teams
    }

    function reorderTeams(teams) {

        teams.sort( (a, b) => {
            let keyA = a.points
            let keyB = b.points

            if (keyA > keyB) return -1
            if (keyA < keyB) return 1
            return 0
        })

        return teams
    }

    return (
        <div className="league-table">
            <Header handleClick={runMatchweek} seasonComplete={seasonComplete}/>
            <Table teams={teams} lastMatchWeek={lastMatchWeek} nextMatches={nextMatches}/>
        </div>
    );
}

export default App;
