import Tooltip from './Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'motion/react'
import { tooltipVariants } from '../motion-utilities'

function NextMatch({ opponent }) {

    const empty = <span>&bull;</span>

    const opponentBadge = (
        <>
            <span className="next-opponent">
                <FontAwesomeIcon
                    icon={opponent?.badge}
                    title={opponent?.name}
                    style={{color:opponent?.color}}
                />
            </span>

            <Tooltip
                content={opponent?.name}
                variants={tooltipVariants}
            />
        </>
    )

    const content = opponent ? opponentBadge : empty

    return (
        <motion.td
            initial="tooltipInitial"
            animate="tooltipInitial"
            whileHover="tooltipAnimate"
            className="next hidden-sm">
            { content }
        </motion.td>
    )
}

export default NextMatch;
