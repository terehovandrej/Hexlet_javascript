/**
 * Implement function getResult
 */
function getResult(time) {
    let timearray = []
    for (const value of time){
        timearray.push(Number(value.slice(0, 2)))
        timearray.push(Number(value.slice(3, 5)))
    }
    for (let i = 0; i < timearray.length ; i++) {
        if (timearray[i] > timearray[i+1]){
            return false
        }

    }
    return true
    // Write your code here...
}
console.log(getResult(["07-09", "10-12", "15-19"]))