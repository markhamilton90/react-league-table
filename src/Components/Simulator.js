
function Simulator({handleClick, seasonComplete}) {
    return (
        <button onClick={handleClick} disabled={seasonComplete} className="light">
            Run Simulation
        </button>
    )
}

export default Simulator;
