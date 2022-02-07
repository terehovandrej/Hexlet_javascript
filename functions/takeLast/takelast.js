// @ts-check

const run = (text) => {
// BEGIN (write your solution here)
const takeLast = (text, num) => {
    if (text.length === 0 || text.length < num) return null
    return text.slice(text.length - num, text.length).split("").reverse().join("")
}
// END

    return takeLast(text, 4);
};

export default run;







console.log(run('cb'));  // null
console.log(run(''));  // null
console.log(run('power'));  // rewo
// run('hexlet'); // telx
