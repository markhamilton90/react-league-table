
function MatchweekText({currentWeek, totalWeeks}) {
    return (
        <div className="matchweek-text hidden-xs">
            <p>Matchweek</p>
            <span class="current-week">
                {currentWeek}
            </span>
            <span class="slash">/</span>
            <span class="total-weeks">
                {totalWeeks}
            </span>
        </div>
    )
}

export default MatchweekText;
