import MatchweekText from './MatchweekText';
import Simulator from './Simulator';

function Header({handleClick, seasonComplete, currentWeek, totalWeeks}) {
    return (
        <header>
            <div className="container-wide">
                <h1>League Table</h1>
                <MatchweekText
                    currentWeek={currentWeek}
                    totalWeeks={totalWeeks}
                />
                <Simulator
                    handleClick={handleClick}
                    seasonComplete={seasonComplete}
                />
            </div>
        </header>
    )
}

export default Header;
