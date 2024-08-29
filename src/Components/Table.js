import { useState } from 'react';
import Row from './Row';

function Table({ teams, played, nextMatches, getTeamData }) {

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
                    <th className="gdiff">GD</th>
                    <th className="hidden-sm">Next</th>
                    <th className="hidden-xs">Form</th>
                </tr>
            </thead>
            <tbody>
                {
                    teams.map((team, index) => (
                        <Row
                            team={team}
                            allTeams={teams}
                            index={index}
                            played={played}
                            nextOpponent={getOpponent(team.id)}
                            getTeamData={getTeamData}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
