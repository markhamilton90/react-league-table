import Tooltip from './Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

            <Tooltip content={opponent?.name}/>
        </>
    )

    const content = opponent ? opponentBadge : empty

    return (
        <td className="next hidden-sm">
            { content }
        </td>
    )
}

export default NextMatch;
