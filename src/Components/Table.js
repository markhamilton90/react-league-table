import { useState } from 'react';
import Row from './Row';

function Table({ teams, lastMatchWeek, nextMatches }) {

    function getOpponent(clubId) {
        if (!nextMatches) {
            return
        }

        let matchup = nextMatches.find(el => el.includes(clubId))
        let opponentID = matchup.split('-').map(Number).find(el => el !== clubId)
        let opponentClub = teams.find(el => el.id == opponentID)

        return opponentClub
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="position">Position</th>
                    <th className="club">Club</th>
                    <th>Points</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th className="gf hidden-xs">GF</th>
                    <th className="ga hidden-xs">GA</th>
                    <th className="gdiff hidden-xs">GD</th>
                    <th className="hidden-sm">Next</th>
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
