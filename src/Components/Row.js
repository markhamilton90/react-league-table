import { useState } from 'react';
import Position from './Position';
import Club from './Club';
import NextMatch from './NextMatch';
import RecentForm from './RecentForm';

function Row({ team, index, lastMatchWeek, nextOpponent }) {

    const classes = index == 0 ? 'first-place' : ''

    return (
        <tr className={ classes }>
            <Position position={index + 1}/>
            <Club name={team.name} badge={team.badge}/>
            <td className="points">
                {team.points}
            </td>
            <td className="played">
                {lastMatchWeek ? lastMatchWeek.played : 0}
            </td>
            <td className="won">
                {team.won}
            </td>
            <td className="drawn">
                {team.drawn}
            </td>
            <td className="lost">
                {team.lost}
            </td>
            <td className="gf hidden-xs">0</td>
            <td className="ga hidden-xs">0</td>
            <td className="gdiff hidden-xs">0</td>
            <NextMatch opponent={nextOpponent}/>
            <RecentForm team={team}/>
        </tr>
    )
}

export default Row;
