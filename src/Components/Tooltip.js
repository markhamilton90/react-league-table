import { motion } from 'motion/react'

function Tooltip({content, openLeft = true, variants = false}) {

    const direction = openLeft ? 'open-left' : 'open-right'

    return (
        <motion.div
            variants={variants}
            className={`tooltip ${direction}`}>
            <div className="tooltip-content">
                {content}
            </div>
        </motion.div>
    )
}

export default Tooltip;
