var isIsomorphic = function(s, t) {

    for (let i=0; i<s.length; i++) {

        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {

            return false;
        }
    }
    return true;
};

let word = 'eggselent'
console.log(isIsomorphic('eggselent', 'add'))

console.log(word.indexOf(word[4]))