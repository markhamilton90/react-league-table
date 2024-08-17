import { useState } from 'react';

function NextMatch({ opponent }) {

    const emptySpan = <span>&bull;</span>

    const opponentBadge = (
        <span
            title={opponent?.name}
            className="badge"
            style={{background: opponent?.badge}}>
        </span>
    )

    const content = opponent ? opponentBadge : emptySpan

    return (
        <td className="next">
            { content }
        </td>
    )
}

export default NextMatch;
