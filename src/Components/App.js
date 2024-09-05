import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Table from './Table';
import teamsData from '../teams.js';
import { createSchedule, playGames } from '../helpers.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

    const [teams, setTeams] = useState(teamsData)
    const [history, setHistory] = useState([])
    const clubs = teams.map(team => team.id)
    const [schedule, setSchedule] = useState(createSchedule(clubs))
    const [matchesPlayed, setMatchesPlayed] = useState([])

    const currentWeek = history.length
    const totalWeeks = clubs.length - 1
    const seasonComplete = currentWeek >= totalWeeks

    const nextMatches = schedule[currentWeek]

    // Return a single team by id
    function getTeamData(id) {
        return teams.find(el => el.id === id)
    }

    // Return a single match by id
    function getMatchData(id) {
        return matchesPlayed.find((el, index) => index === id)
    }

    function runMatchweek() {

        // Generate match outcomes
        const currentTeams = [...teams]
        const currentFixtures = schedule[currentWeek]
        const results = playGames(currentFixtures)
        const currentMatchesPlayed = [...matchesPlayed]

        // Update points and scores
        const [nextTeams, nextMatchesPlayed] = calculatePoints(results, currentFixtures, currentTeams, currentMatchesPlayed)

        // Update placement of teams
        const nextSortedTeams = reorderTeams(teams)
        setTeams([...nextSortedTeams])

        // Update matches played
        setMatchesPlayed(nextMatchesPlayed)

        // Update the history
        const nextHistoryEntry = {
            'fixtures': schedule[history.length]
        }

        setHistory([...history, nextHistoryEntry])
    }

    function calculatePoints(results, fixtures, teams, matchesPlayed) {

        results.forEach( (res, i) => {
            const [a, b] = fixtures[i].split('-').map(Number)

            const teamA = teams.find(el => el['id'] == a)
            const teamB = teams.find(el => el['id'] == b)

            // record this matchup for each team
            teamA['opponents'].push(teamB['id'])
            teamB['opponents'].push(teamA['id'])

            // calculate goal differential from the score
            teamA['gf'] += res[0]
            teamA['ga'] += res[1]
            teamA['gd'] = teamA['gf'] - teamA['ga']

            teamB['gf'] += res[1]
            teamB['ga'] += res[0]
            teamB['gd'] = teamB['gf'] - teamB['ga']

            const matchDetails = {}
            matchDetails['clubs'] = [teamA['id'], teamB['id']]

            // team A won against team B
            if (res[0] > res[1]) {
                teamA['won'] += 1
                teamA['points'] += 3
                teamB['lost'] += 1

                teamA['results'].push(3)
                teamB['results'].push(0)

                matchDetails['winner'] = teamA['id']
                matchDetails['score'] = [res[0], res[1]]
            }
            // team A lost to team B
            else if (res[0] < res[1]) {
                teamA['lost'] += 1
                teamB['won'] += 1
                teamB['points'] += 3

                teamA['results'].push(0)
                teamB['results'].push(3)

                matchDetails['winner'] = teamB['id']
                matchDetails['score'] = [res[1], res[0]]
            }
            // Draw game
            else {
                teamA['drawn'] += 1
                teamA['points'] += 1
                teamB['drawn'] += 1
                teamB['points'] += 1

                teamA['results'].push(1)
                teamB['results'].push(1)

                matchDetails['winner'] = null
                matchDetails['score'] = [res[0], res[1]]
            }

            matchesPlayed.push(matchDetails)
            const lastIndex = matchesPlayed.length - 1

            teamA['matchesPlayed'].push(lastIndex)
            teamB['matchesPlayed'].push(lastIndex)
        })


        return [teams, matchesPlayed]
    }

    function reorderTeams(teams) {

        teams.sort( (a, b) => {
            let keyA = a.points
            let keyB = b.points

            if (keyA > keyB) return -1
            if (keyA < keyB) return 1

            // If points are the same, determine ranking
            // based on goal differential
            if (keyA == keyB) {
                if (a.gd > b.gd) return -1
                if (a.gd < b.gd) return 1
                return 0
            }
        })

        // Update position values before returning
        return teams.map( (team, index) => {
            team['prevPosition'] = team['position']
            team['position'] = index
            return team
        })
    }

    return (
        <div className="league-table-app">
            <Header
                handleClick={runMatchweek}
                seasonComplete={seasonComplete}
            />
            <Table
                teams={teams}
                played={currentWeek}
                nextMatches={nextMatches}
                getTeamData={getTeamData}
                getMatchData={getMatchData}
            />
        </div>
    );
}

export default App;
