import { motion } from 'motion/react'

function MatchweekText({currentWeek, totalWeeks}) {
    return (
        <div className="matchweek-text hidden-xs">
            <p>Matchweek</p>
            <span className="current-week">
                {currentWeek}
            </span>
            <span className="slash">/</span>
            <span className="total-weeks">
                {totalWeeks}
            </span>
        </div>
    )
}

export default MatchweekText;
