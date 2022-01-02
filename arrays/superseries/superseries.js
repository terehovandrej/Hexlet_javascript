export default (scores) => {
    let canada = 0
    let ussr = 0
    for (let i = 0; i < scores.length; i++) {
        if (scores[i][0] > scores[i][1]) {
            canada++
        } else if (scores[i][0] < scores[i][1]) {
            ussr++
        }
    }
    if (canada > ussr) return 'canada'
    else if (canada < ussr) return 'ussr'
    else return null
}
