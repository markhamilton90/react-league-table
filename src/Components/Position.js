import Tooltip from './Tooltip';

function Position({ played, position, prevPosition }) {

    const movedUp = Number.isInteger(prevPosition) && position < prevPosition
    const movedDown = Number.isInteger(prevPosition) && position > prevPosition
    const previousClass = movedUp ? 'moved-up' : movedDown ? 'moved-down' : 'no-movement'

    const content = (
        <span>Previous position <span className="prev">{prevPosition + 1}</span></span>
    )
    const tooltip = (played > 0)
        ? <Tooltip content={content} openLeft={false}/>
        : ''

    return (
        <td className="position">
            <span className="current">{position + 1}</span>
            <span className={`previous ${previousClass}`}></span>

            {tooltip}
        </td>
    )
}

export default Position;
