import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RecentForm({ team, getTeamData, getMatchData }) {

    const results = team.results.slice(-5)
    const opponents = team.opponents.slice(-5)
    const matchesPlayed = team.matchesPlayed.slice(-5)

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
                    results.map( (res, index) => {

                        const matchData = getMatchData(matchesPlayed[index])
                        const opponent = getTeamData(opponents[index])
                        const outcome = res === 3 ? win : res === 0 ? loss : draw

                        const score = (team.id == matchData.winner)
                            ? `${matchData.score[0]} - ${matchData.score[1]}`
                            : `${matchData.score[1]} - ${matchData.score[0]}`

                        return (
                            <li>
                                <div className="tooltip tooltip-previous">
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
