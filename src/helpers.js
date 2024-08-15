
export function randomize(range) {
    return Math.floor(Math.random() * range)
}

/*
This requires an even number of teams in order
to reliably and predictably generate all matchups.

Uses the cyclical method for drawing fixtures.
The number 1 is fixed in place and the other numbers
are rotated clockwise

**------------**
|  6        1  |
|  5   ↳    2  |
|  4   ←    3  |
**------------**
*/
export function createSchedule(clubs) {
    let weeks = clubs.length - 1
    let matchesPerWeek = clubs.length / 2

    let left = clubs.slice(0, matchesPerWeek);
    let right = clubs.slice(matchesPerWeek, clubs.length).reverse();

    let schedule = Array(weeks).fill([])

    for (let i = 0; i < weeks; i++) {

    // cyclical method to get every permutation
    // 1, 2, 3  |  6, 5, 4
    // ====================
    // remove first element from right array,
    // and place it right after the first index in the left array
    let toLeft = right.shift();
    left.splice(1, 0, toLeft);
    // remove last element from left array,
    // and append it to the right array
    let toRight = left.pop();
    right.push(toRight);
    // this is one rotation
    //
    // the first element in left array remains fixed

    let matchweek = [];
    for (let j = 0; j < matchesPerWeek; j++) {
      let matchup = `${left[j]}-${right[j]}`
        matchweek.push(matchup)
      }
      schedule[i] = [...matchweek];
    }

    return schedule
}
