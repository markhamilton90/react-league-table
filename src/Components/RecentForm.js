import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RecentForm({ team, getTeamData }) {

    const results = team.results.slice(-5)
    const opponents = team.opponents.slice(-5)

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
                    results.map( (res, index) => (
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
                                        vs
                                    </span>
                                    <span className="short-name opponent">
                                        <FontAwesomeIcon
                                            icon={getTeamData(opponents[index]).badge} style={{color:getTeamData(opponents[index]).color}}
                                        />
                                        {getTeamData(opponents[index]).shortName}
                                    </span>
                                </div>
                            </div>

                            { res === 3 ? win : res === 0 ? loss : draw }
                        </li>
                    ))
                }
            </ul>
        </td>
    )
}

export default RecentForm;
