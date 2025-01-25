import Tooltip from './Tooltip';
import { motion } from 'motion/react'
import { tooltipVariants } from '../motion-utilities'

function Position({ played, position, prevPosition }) {

    const movedUp = Number.isInteger(prevPosition) && position < prevPosition
    const movedDown = Number.isInteger(prevPosition) && position > prevPosition
    const previousClass = movedUp ? 'moved-up' : movedDown ? 'moved-down' : 'no-movement'

    const content = (
        <span>Previous position <span className="prev">{prevPosition + 1}</span></span>
    )
    const tooltip = (played > 0)
        ? <Tooltip content={content} openLeft={false} variants={tooltipVariants}/>
        : ''

    return (
        <motion.td
            className="position"
            initial="tooltipInitial"
            animate="tooltipInitial"
            whileHover="tooltipAnimate">

            <span className="current">{position + 1}</span>
            <span key={ position } className={`previous ${previousClass}`}></span>

            {tooltip}

        </motion.td>
    )
}

export default Position;
