import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { faMedal } from '@fortawesome/free-solid-svg-icons';

function Club({ name, badge }) {
    return (
        <td className="club">
            <span className="badge" style={{background: badge}}></span>
            <span className="clubname">{name}</span>
        </td>
    )
}

export default Club;
