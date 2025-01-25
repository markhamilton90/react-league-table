import { motion } from 'motion/react'
import { buttonVariants } from '../motion-utilities'

function HeaderButton({handleClick, seasonComplete}) {
    return (
        <motion.button
            variants={buttonVariants}
            whileTap="buttonTap"
            onClick={handleClick}
            disabled={seasonComplete}
            className="light">
            Run Simulation
        </motion.button>
    )
}

export default HeaderButton;
