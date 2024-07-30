import { useState } from 'react';
import Position from './Position';
import Club from './Club';
import Form from './Form';

function Row({ team }) {
    return (
        <tr>
            <Position position={team.position}/>
            <Club name={team.name}/>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <Form />
        </tr>
    )
}

export default Row;
