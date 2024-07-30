import { useState } from 'react';
import Row from './Row';

function Table({ teams }) {
    return (
        <table>
            <thead>
                <tr>
                    <th class="position">Position</th>
                    <th class="club">Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                    <th>Form</th>
                </tr>
            </thead>
            <tbody>
                {
                    teams.map((team, index) => (
                        <Row team={team} index={index}/>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
