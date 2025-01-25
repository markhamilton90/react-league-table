import Position from './Position';
import Club from './Club';
import NextMatch from './NextMatch';
import RecentForm from './RecentForm';
import { motion } from 'motion/react'

function Row({ team, allTeams, index, played, nextOpponent, getTeamData, getMatchData }) {

    return (
        <motion.tr
            initial={{ opacity: 0, top: "-15px", position: "relative" }}
            animate={{ opacity: 1, top: "0px", position: "relative" }}
            layout
        >
            <Position
                played={played}
                position={index}
                prevPosition={team.prevPosition}
            />
            <Club
                team={team}
            />
            <td className="points">
                {team.points}
            </td>
            <td className="played">
                {played}
            </td>
            <td className="won">
                {team.won}
            </td>
            <td className="drawn">
                {team.drawn}
            </td>
            <td className="lost">
                {team.lost}
            </td>
            <td className="gf hidden-xs">
                {team.gf}
            </td>
            <td className="ga hidden-xs">
                {team.ga}
            </td>
            <td className="gdiff">
                {team.gd}
            </td>
            <NextMatch opponent={nextOpponent}/>
            <RecentForm
                team={team}
                getTeamData={getTeamData}
                getMatchData={getMatchData}
            />
        </motion.tr>
    )
}

export default Row;
