import { useState } from 'react';
import Position from './Position';
import Club from './Club';
import NextMatch from './NextMatch';
import RecentForm from './RecentForm';

function Row({ team, allTeams, index, played, nextOpponent }) {

    return (
        <tr>
            <Position
                played={played}
                position={index}
                prevPosition={team.prevPosition}
            />
            <Club name={team.name} badge={team.badge}/>
            <td className="points">
                {team.points}
            </td>
            <td className="played">
                {played}
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
            <RecentForm
                team={team}
                allTeams={allTeams}
            />
        </tr>
    )
}

export default Row;
