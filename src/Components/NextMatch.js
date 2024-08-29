import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NextMatch({ opponent }) {

    const empty = <span>&bull;</span>
    const badgeName = opponent?.badge || 'futbol'

    const opponentBadge = (
        <span className="next-opponent">
            <FontAwesomeIcon
                icon={badgeName}
                title={opponent?.name}
                style={{color:opponent?.color}}
            />
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
