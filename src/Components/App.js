import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import '../App.css'
import Header from './Header'
import Table from './Table'
import TeamNumberModal from './TeamNumberModal'
import teamsData from '../teams.js';
import { createSchedule, playGames } from '../helpers.js'

function App() {

    // Initial state
    const [numberOfTeams, setNumberOfTeams] = useState(0)
    const [teams, setTeams] = useState([])
    const [schedule, setSchedule] = useState([])
    const [matchesPlayed, setMatchesPlayed] = useState([])
    const [currentWeek, setCurrentWeek] = useState(0)

    const clubs = teams.map(team => team.id) || []
    const totalWeeks = clubs.length ? (clubs.length - 1) * 2 : 0
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

    // Sets the number of teams and related state values
    function chooseNumberOfTeams(number) {
        setNumberOfTeams(number)
        let actualTeams = teamsData.slice(0, number)
        setTeams(actualTeams)

        const clubs = actualTeams.map(team => team.id)
        const firstHalf = createSchedule(clubs)
        const secondHalf = createSchedule(clubs)
        const fullSchedule = firstHalf.concat(secondHalf)
        setSchedule(fullSchedule)
    }

    function runMatchweek() {
        // Deep clone from the teams state
        const currentTeams = teams.map(obj => ({
             ...obj,
             results: [ ...obj.results ],
             opponents: [ ...obj.opponents ],
             matchesPlayed: [ ...obj.matchesPlayed ]
         }))
        const currentFixtures = schedule[currentWeek]
        const currentMatchesPlayed = [...matchesPlayed]

        // Generate match outcomes
        const results = playGames(currentFixtures)

        // Update points and scores
        const [nextTeams, nextMatchesPlayed] = calculatePoints(
            results, currentFixtures, currentTeams, currentMatchesPlayed
        )

        // Update placement of teams
        const nextSortedTeams = reorderTeams(nextTeams)
        setTeams(nextSortedTeams)

        // Update matches played and current week
        setMatchesPlayed(nextMatchesPlayed)
        setCurrentWeek(currentWeek + 1)
    }

    function calculatePoints(results, fixtures, teams, matchesPlayed) {

        results.forEach( (res, i) => {
            const [a, b] = fixtures[i].split('-').map(Number)

            const teamA = teams.find(el => el['id'] == a)
            const teamB = teams.find(el => el['id'] == b)

            // Record this matchup for each team
            teamA['opponents'].push(teamB['id'])
            teamB['opponents'].push(teamA['id'])

            // Calculate goal differential from the score
            teamA['gf'] += res[0]
            teamA['ga'] += res[1]
            teamA['gd'] = teamA['gf'] - teamA['ga']

            teamB['gf'] += res[1]
            teamB['ga'] += res[0]
            teamB['gd'] = teamB['gf'] - teamB['ga']

            const matchDetails = {}
            matchDetails['clubs'] = [teamA['id'], teamB['id']]

            // Team A won against team B
            if (res[0] > res[1]) {
                teamA['won'] += 1
                teamA['points'] += 3
                teamB['lost'] += 1

                teamA['results'].push(3)
                teamB['results'].push(0)

                matchDetails['winner'] = teamA['id']
                matchDetails['score'] = [res[0], res[1]]
            }
            // Team A lost to team B
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

        const sortedTeams = teams.toSorted((a, b) => {
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
        return sortedTeams.map((obj, index) => ({
            ...obj,
            prevPosition: obj.position,
            position: index
        }))
    }

    const conditionalMarkup = (numberOfTeams <= 0)
        ? (
            <TeamNumberModal
                key="modalKey"
                chooseNumberOfTeams={chooseNumberOfTeams}
            />
        )
        : (
            <Table
                teams={teams}
                played={currentWeek}
                nextMatches={nextMatches}
                getTeamData={getTeamData}
                getMatchData={getMatchData}
            />
        )

    return (
        <div className="league-table-app">
            <Header
                handleClick={runMatchweek}
                seasonComplete={seasonComplete}
                currentWeek={currentWeek}
                totalWeeks={totalWeeks}
            />
            <AnimatePresence mode="wait">
                { conditionalMarkup }
            </AnimatePresence>
        </div>
    );
}

export default App;
