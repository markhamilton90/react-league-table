import MatchweekText from './MatchweekText';
import HeaderButton from './HeaderButton';

function Header({handleClick, seasonComplete, currentWeek, totalWeeks}) {
    return (
        <header>
            <div className="container-wide">
                <h1>League Table</h1>
                <MatchweekText
                    currentWeek={currentWeek}
                    totalWeeks={totalWeeks}
                />
                <HeaderButton
                    handleClick={handleClick}
                    seasonComplete={seasonComplete}
                />
            </div>
        </header>
    )
}

export default Header;
