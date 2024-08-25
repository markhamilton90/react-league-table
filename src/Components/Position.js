import { useState } from 'react';

function Position({ played, position, prevPosition }) {

    const movedUp = Number.isInteger(prevPosition) && position < prevPosition
    const movedDown = Number.isInteger(prevPosition) && position > prevPosition
    const previousClass = movedUp ? 'moved-up' : movedDown ? 'moved-down' : 'no-movement'

    let tooltip = ''

    if (played > 0) {
        tooltip = (
            <span className="tooltip tooltip-previous">
                <span className="tooltip-content">
                    Previous position <b>{prevPosition + 1}</b>
                </span>
            </span>
        )
    }

    return (
        <td className="position">
            <span className="current">{position + 1}</span>
            <span className={`previous ${previousClass}`}></span>

            {tooltip}
        </td>
    )
}

export default Position;
