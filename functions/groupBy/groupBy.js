// reduce
const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
];



const groupBy = (array, property) => {
    const result = {};
    array.reduce((acc, el) => {
        if (!result.hasOwnProperty(el[property])) {
            result[el[property]] = [];
        }
        result[el[property]].push(el);
    }, {});
    return result
}



console.log(groupBy(students, 'mark'))
// groupBy([], ''); // {}
// // groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }