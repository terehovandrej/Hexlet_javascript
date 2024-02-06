/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let resultArr = []
    for (let i=0; i < operations.length; i++) {
        if (operations[i] === "C") resultArr.splice(-1, 1)
        else if (operations[i] === "D") {resultArr.push(resultArr.at(-1)*2)}
        else if (operations[i] === "+") resultArr.push(resultArr.at(-1)+resultArr.at(-2))
        else resultArr.push(parseInt(operations[i]))
    }
    return resultArr.length === 0 ?  0 : resultArr.reduce((a,b)=> {return a + parseInt(b)})

};

console.log(calPoints(["5","2","C","D","+"]))
