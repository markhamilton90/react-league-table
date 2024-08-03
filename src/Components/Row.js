import { useState } from 'react';
import Position from './Position';
import Club from './Club';
import RecentForm from './RecentForm';

function Row({ team, matchWeek }) {
    return (
        <tr>
            <Position position={team.position}/>
            <Club name={team.name}/>
            <td className="played">
                {matchWeek ? matchWeek.played : 0}
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <RecentForm />
        </tr>
    )
}

export default Row;
