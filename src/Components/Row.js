import { useState } from 'react';
import Position from './Position';
import Club from './Club';
import NextMatch from './NextMatch';
import RecentForm from './RecentForm';

function Row({ team, lastMatchWeek, nextOpponent }) {

    return (
        <tr>
            <Position position={team.position}/>
            <Club name={team.name} badge={team.badge}/>
            <td className="played">
                {lastMatchWeek ? lastMatchWeek.played : 0}
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <NextMatch opponent={nextOpponent}/>
            <RecentForm />
        </tr>
    )
}

export default Row;
