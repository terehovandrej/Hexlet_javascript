const getHiddenCard = (text, num = 4) => {
    return "*".repeat(num) + text.substring(12, 16)
}
// END

console.log(getHiddenCard('1234567812345678', 3))