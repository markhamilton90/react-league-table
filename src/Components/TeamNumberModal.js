import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { buttonVariants, modalVariants } from '../motion-utilities'

function TeamNumberModal({ chooseNumberOfTeams }) {

    const [number, setNumber] = useState(6)

    const modalRef = useRef(null)

    useEffect(() => {
        modalRef.current.showModal()
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                e.preventDefault()
            }
        })
    }, [])

    return (
        <motion.dialog
            ref={modalRef}
            variants={modalVariants}
            initial="modalInitial"
            animate="modalAnimate"
            exit="modalExit"
            id="numberOfTeamsModal">
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
        </motion.dialog>
    )
}

export default TeamNumberModal;
