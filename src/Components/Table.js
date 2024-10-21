import Row from './Row';

function Table({ teams, played, nextMatches, getTeamData, getMatchData }) {

    function getOpponent(clubId) {
        if (!nextMatches) {
            return
        }
        let matchup = nextMatches.find(el => el.includes(clubId))
        let opponentID = matchup.split('-').map(Number).find(el => el !== clubId)
        let opponentClub = getTeamData(opponentID)

        return opponentClub
    }

    return (
        <table className="league-table container-wide">
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
                            key={team.id}
                            team={team}
                            allTeams={teams}
                            index={index}
                            played={played}
                            nextOpponent={getOpponent(team.id)}
                            getTeamData={getTeamData}
                            getMatchData={getMatchData}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
