// export function getRandomUniqueNumbers(amount, range) {
//     let numbers = []
//     for (let i = 0; i < amount;) {
//         let value = Math.ceil(Math.random() * range);
//         if (numbers.includes(value)) {
//             continue
//         } else {
//             numbers.push(value)
//             i++
//         }
//     }
//     return numbers
// }

export function randomize(range) {
    return Math.floor(Math.random() * range)
}

function reverse(str) {
    return str.split('-').reverse().join('-')
}

export function selectMatchups(matchups) {

}

export function setWeeklyMatchups(matchups, teams) {

    const totalWeeks = teams - 1
    const matchesPerWeek = teams / 2
    let matchweeks = []

    for (let i = 0; i < totalWeeks; i++) {
        matchweeks.push([])
        for (let j = 0; j < matchesPerWeek;) {
            let randomIndex = randomize(matchups.length)
            let randomMatchup = matchups[randomIndex]

            let currentEntries = matchweeks[i].join('-')?.split('-')
            let [teamA, teamB] = randomMatchup.split('-')

            if (currentEntries.includes(teamA) || currentEntries.includes(teamB)) {
                continue
            } else {
                matchweeks[i].push(randomMatchup)
                matchups.splice(randomIndex, 1)

                j++
            }
        }
    }

    return matchweeks
}

export function createMatchups(teams) {
    let matchups = []
    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams.length; j++) {
            let str = `${i}-${j}`
            if (i != j && !matchups.includes(str) && !matchups.includes(reverse(str))) {
                matchups.push(str)
            }
        }
    }
    return matchups

    // matchWeeks = []
    // totalWeeks = teams.length / 2
    //
    // for (let i = 0; i < totalWeeks; i++) {
    //     let randomIndex = randomize(matchups.length)
    //     let randomMatch = matchups[randomIndex]
    //
    //     let randomMatchClubs = randomMatch.split('-')
    //     let matchWeekClubs = matchWeeks[i].join('-').split('-')
    //
    //     if (matchWeeks[i].includes(match) == false)
    //         matchWeeks[i].push(matchups.splice(match, 1))
    // }
    // return matchWeeks
}
