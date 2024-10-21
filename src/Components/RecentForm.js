import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RecentForm({ team, getTeamData, getMatchData }) {

    const results = team.results.slice(-5)
    const opponents = team.opponents.slice(-5)
    const recentMatches = team.matchesPlayed.slice(-5)

    const win = (
        <abbr title="Won" className="win">W</abbr>
    )

    const loss = (
        <abbr title="Lost" className="loss">L</abbr>
    )

    const draw = (
        <abbr title="Drawn" className="draw">D</abbr>
    )

    return (
        <td className="form hidden-xs">
            <ul>
                {
                    results.map( (res, i) => {

                        const matchId = recentMatches[i]
                        const match = getMatchData(matchId)
                        const opponent = getTeamData(opponents[i])
                        const outcome = res === 3 ? win : res === 0 ? loss : draw

                        const score = (team.id == match.winner)
                            ? `${match.score[0]} - ${match.score[1]}`
                            : `${match.score[1]} - ${match.score[0]}`

                        return (
                            <li key={ matchId }>
                                <div className="tooltip tooltip-recent-match">
                                    <div className="tooltip-content">
                                        <span className="short-name">
                                            {team.shortName}
                                            <FontAwesomeIcon
                                                icon={team.badge}
                                                style={{color:team.color}}
                                            />
                                        </span>
                                        <span className="score">
                                            {score}
                                        </span>
                                        <span className="short-name opponent">
                                            <FontAwesomeIcon
                                                icon={opponent.badge}
                                                style={{color:opponent.color}}
                                            />
                                            {opponent.shortName}
                                        </span>
                                    </div>
                                </div>

                                {outcome}
                            </li>
                        )
                    })
                }
            </ul>
        </td>
    )
}

export default RecentForm;
