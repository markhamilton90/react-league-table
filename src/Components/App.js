import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';
import { createSchedule, playGames, updateTeamStats } from '../helpers.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

    const [teams, setTeams] = useState(teamsData)
    const [history, setHistory] = useState([])
    const clubs = teams.map(team => team.id)
    const [schedule, setSchedule] = useState(createSchedule(clubs))

    const currentWeek = history.length
    const totalWeeks = clubs.length - 1
    const seasonComplete = history.length >= totalWeeks

    const nextMatches = schedule[history.length]

    // Return team object by id
    function getTeamData(id) {
        return teams.find(el => el.id === id)
    }

    function runMatchweek() {

        // Generate match outcomes
        const currentTeams = [...teams]
        const currentFixtures = schedule[currentWeek]
        const results = playGames(currentFixtures)

        // Update points and placement of teams
        const nextTeams = calculatePoints(results, currentFixtures, currentTeams)
        const nextSortedTeams = reorderTeams(teams)
        setTeams([...nextSortedTeams])

        // Update the history
        const nextHistoryEntry = {
            'fixtures': schedule[history.length]
        }

        setHistory([...history, nextHistoryEntry])
    }

    function calculatePoints(results, fixtures, teams) {

        results.forEach( (res, i) => {
            const [a, b] = fixtures[i].split('-').map(Number)

            const teamA = teams.find(el => el['id'] == a)
            const teamB = teams.find(el => el['id'] == b)

            // record this matchup for each team
            teamA['opponents'].push(teamB['id'])
            teamB['opponents'].push(teamA['id'])

            switch (res[0]) {
                // Outcome was a draw
                case 1:
                    teamA['drawn'] += 1
                    teamA['points'] += 1
                    teamB['drawn'] += 1
                    teamB['points'] += 1

                    teamA['results'].push(1)
                    teamB['results'].push(1)

                    break
                // Team A lost to team B
                case 0:
                    teamA['lost'] += 1
                    teamB['won'] += 1
                    teamB['points'] += 3

                    teamA['results'].push(0)
                    teamB['results'].push(3)

                    break
                // Team A won against team B
                case 3:
                    teamA['won'] += 1
                    teamA['points'] += 3
                    teamB['lost'] += 1

                    teamA['results'].push(3)
                    teamB['results'].push(0)

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

        // Update position values before returning
        return teams.map( (team, index) => {
            team['prevPosition'] = team['position']
            team['position'] = index
            return team
        })
    }

    return (
        <div className="league-table">
            <Header
                handleClick={runMatchweek}
                seasonComplete={seasonComplete}
            />
            <Table 
                teams={teams}
                played={currentWeek}
                nextMatches={nextMatches}
                getTeamData={getTeamData}
            />
        </div>
    );
}

export default App;
