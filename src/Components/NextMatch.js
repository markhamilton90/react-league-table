import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

            <div className="tooltip tooltip-next-opponent">
                <div className="tooltip-content">
                    {opponent?.name}
                </div>
            </div>
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
