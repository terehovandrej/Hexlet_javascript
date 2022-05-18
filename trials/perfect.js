// words = ["abc","deq","mee","aqq","dkd","ccc"]
// pattern = "abb"
//

// function findWords(words, pattern) {
//     let num = 0
//     let result = 0
//     if (pattern)
//     for (let word of words) {
//         for (let i = 0; i <word.length ; i++) {
//             word
//         }
//     }
//
//     return result
//
// }
//
// let words = ['aab', 'mme', 'asd', 'bbb', 'dfd']
// let pattern = 'rre'
// findWords( words, pattern )

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
let str = 'asd'
str.replaceAt(1, "x")
console.log(str)