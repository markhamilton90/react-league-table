function Tooltip({content, openLeft = true}) {

    const direction = openLeft ? 'open-left' : 'open-right'

    return (
        <div className={`tooltip ${direction}`}>
            <div className="tooltip-content">
                {content}
            </div>
        </div>
    )
}

export default Tooltip;
