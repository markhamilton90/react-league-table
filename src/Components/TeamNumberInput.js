function TeamNumberInput() {

    return (
        <div>
            <label htmlFor="team-number">Team Number</label>
            <input
                type="number"
                name="team-number"
                step="2"
                min="2"
                max="10"
            />
        </div>
    )
}

export default TeamNumberInput;
