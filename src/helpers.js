export function randomize(range) {
    return Math.floor(Math.random() * range)
}

// Get goals for each team in the match
export function playGames(fixtures) {
    let results = fixtures.map(el => {
        return [randomize(6), randomize(6)]
    })
    return results
}

/*
Uses the cyclical method for drawing fixtures.
The number 1 is fixed in place and the other numbers
are rotated clockwise

**------------**
|  6        1  |
|  5   ↳    2  |
|  4   ←    3  |
**------------**

This requires an even number of teams in order
to reliably and predictably generate all matchups.
*/
export function createSchedule(clubs) {
    let weeks = clubs.length - 1
    let matchesPerWeek = clubs.length / 2

    let left = clubs.slice(0, matchesPerWeek);
    let right = clubs.slice(matchesPerWeek, clubs.length).reverse();

    let schedule = Array(weeks).fill([])

    for (let i = 0; i < weeks; i++) {

        // Cyclical method to get every permutation
        // 1, 2, 3  |  6, 5, 4
        // ====================
        // Remove first element from right array,
        // and place it right after the first index in the left array
        let toLeft = right.shift();
        left.splice(1, 0, toLeft);
        // Remove last element from left array,
        // and append it to the right array
        let toRight = left.pop();
        right.push(toRight);

        let matchweek = [];
        for (let j = 0; j < matchesPerWeek; j++) {
            let matchup = `${left[j]}-${right[j]}`
            matchweek.push(matchup)
        }

        schedule[i] = [...matchweek];
    }

    return schedule
}
