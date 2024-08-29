import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Club({ team }) {

    return (
        <td className="club">
            <FontAwesomeIcon icon={team.badge} style={{color:team.color}} />
            <span className="clubname hidden-sm">{team.name}</span>
            <span className="short-name hidden-md-up">{team.shortName}</span>
        </td>
    )
}

export default Club;
