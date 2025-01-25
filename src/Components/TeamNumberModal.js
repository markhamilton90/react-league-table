import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { buttonVariants } from '../motion-utilities'

function TeamNumberModal({ chooseNumberOfTeams }) {

    const [number, setNumber] = useState(6)

    useEffect(() => {
        document.getElementById('numberOfTeamsModal').showModal()
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                e.preventDefault()
            }
        })
    }, [])

    return (
        <dialog id="numberOfTeamsModal">
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
                <motion.button
                    autoFocus={true}
                    variants={buttonVariants}
                    whileTap="buttonTap"
                    className="primary"
                    onClick={() => chooseNumberOfTeams(number)}>
                    Submit
                </motion.button>
            </div>
        </dialog>
    )
}

export default TeamNumberModal;
