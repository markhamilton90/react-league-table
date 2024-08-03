import { useState } from 'react';

function Position({ position }) {
    return (
        <td className="position">
            <span className="current">{position}</span>
            <span className="previous" style={{display:'none'}}>
                <span className="tooltip">
                    Previous position <b>{position}</b>
                </span>
            </span>
        </td>
    )
}

export default Position;
