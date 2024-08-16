import { useState } from 'react';

function Club({ name, badge }) {
    return (
        <td className="club">
            <span className="badge" style={{background: badge}}></span>
            <span className="clubname">{name}</span>
        </td>
    )
}

export default Club;
