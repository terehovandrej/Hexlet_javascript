
const solution = (number) => {
    let str = String(number)
    if (Number(str[0]) > Number(str[1])) return true
    else return false
};

module.exports = solution;