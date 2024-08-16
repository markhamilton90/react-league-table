import { useState } from 'react';
import Row from './Row';

function Table({ teams, lastMatchWeek, nextMatches }) {

    function getOpponent(clubId) {
        if (!nextMatches) {
            return
        }

        let matchup = nextMatches.find(el => el.includes(clubId))
        let opponentID = matchup.split('-').find(el => parseInt(el) !== clubId)
        let opponentClub = teams.find(el => el.id == parseInt(opponentID))

        return opponentClub
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="position">Position</th>
                    <th className="club">Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                    <th>Next</th>
                    <th>Form</th>
                </tr>
            </thead>
            <tbody>
                {
                    teams.map((team, index) => (
                        <Row
                            team={team}
                            index={index}
                            lastMatchWeek={lastMatchWeek}
                            nextOpponent={getOpponent(team.id)}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
