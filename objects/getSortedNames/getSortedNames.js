const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];


const  getSortedNames = (users) => {
    let result = []
    for (const user of users) {
        const { name } = user
        result.push(name)
    }
    return result.sort()
}

console.log(getSortedNames(users))