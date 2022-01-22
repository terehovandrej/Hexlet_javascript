const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

const pick = (data, array) => {
    let keys = Object.keys(data)
    let intersection = array.filter(x => keys.includes(x));
    let result = {}
    for (const intersectionElement of intersection) {
        result[intersectionElement] = data[intersectionElement]
    }
    return result
}

console.log(pick(data, ['user', 'os'])) // { user: 'ubuntu', os: 'linux' })
// pick(data, ['user']); // { user: 'ubuntu' }
// pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
// pick(data, []); // {}
// // Если такого свойства нет в исходных данных,
// // то оно игнорируется
// pick(data, ['none', 'cores']); // { cores: 4 }