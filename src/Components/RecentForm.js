import { useState } from 'react';

function RecentForm({ team, allTeams }) {

    const results = team.results.slice(-5)
    const opponents = team.opponents.slice(-5)

    function getOpponent(id) {
        return allTeams.find(el => el['id'] === id)
    }

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
        <td className="form">
            <ul>
                {
                    results.map( (res, index) => (
                        <li>
                            <div className="tooltip tooltip-previous">
                                <div className="tooltip-content">
                                    <span>
                                        {team.name}
                                    </span>
                                    &nbsp;vs&nbsp;
                                    <span>
                                        {/* {allTeams.find(el => el['id'] == opponents[index]['id']).name} */}
                                        {getOpponent(opponents[index]['id']).name}
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
