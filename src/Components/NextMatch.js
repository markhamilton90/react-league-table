import { useState } from 'react';

function NextMatch({ opponent }) {

    const empty = <span>&bull;</span>

    const opponentBadge = (
        <span
            title={opponent?.name}
            className="badge"
            style={{background: opponent?.badge}}>
        </span>
    )

    const content = opponent ? opponentBadge : empty

    return (
        <td className="next hidden-sm">
            { content }
        </td>
    )
}

export default NextMatch;
