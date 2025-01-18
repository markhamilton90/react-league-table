import { useState } from 'react'

function TeamNumberInput({ chooseNumberOfTeams }) {

    const [number, setNumber] = useState(6)

    return (
        <div className="number-of-teams">
            <label htmlFor="team-number">Number of Teams:</label>
            <span className="number">{number}</span>
            <input
                type="range"
                name="team-number"
                step="2"
                min="2"
                max="10"
                value={number}
                onInput={e => setNumber(parseInt(e.target.value))}
            />
            <button
                className="primary"
                onClick={() => chooseNumberOfTeams(number)}>
                Submit
            </button>
        </div>
    )
}

export default TeamNumberInput;
