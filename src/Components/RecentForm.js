import { useState } from 'react';

function RecentForm({ team }) {

    const results = team.results.slice(-5)

    const win = (
        <li className="win">
            <abbr title="Won">W</abbr>
        </li>
    )

    const loss = (
        <li className="loss">
            <abbr title="Lost">L</abbr>
        </li>
    )

    const draw = (
        <li className="draw">
            <abbr title="Drawn">D</abbr>
        </li>
    )

    return (
        <td className="form">
            <ul>
                {
                    results.map( res => (
                        res === 3 ? win : res === 0 ? loss : draw
                    ))
                }
            </ul>
        </td>
    )
}

export default RecentForm;
