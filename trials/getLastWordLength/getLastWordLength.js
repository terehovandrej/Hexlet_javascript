const getLastWordLength = (string) => {
    return string.trim().split(' ')[string.trim().split(' ').length-1].length
}


console.log(getLastWordLength('hello, world!  '))
// getLastWordLength(''); // 0
//
// getLastWordLength('man in BlacK'); // 5
//
// getLastWordLength('hello, world!  '); // 6
