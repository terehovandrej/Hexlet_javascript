import _ from 'lodash';


const takeOldest = (array, num = 1) => {
    let sorted = _.sortBy(array.map((user) => {
        return {name: user.name, birthday: user.birthday, form_birthday: Date.parse(user.birthday)}
    }), ['form_birthday'])

    return sorted.map((user)=>{ delete user.form_birthday; return user}).slice(0, num)

}



// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    // BEGIN (write your solution here)
    // return array.sort((a, b) => Math.sign(new Date(b.birthday) - new Date(a.birthday))).slice(array.length - 1 - num, array.length - 1)


// END

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];
//
// takeOldest(users);
// // [
// //   { name: 'Rob', birthday: 'Jan 11, 1975' },
// // ];

console.log(takeOldest(users))
console.log(new Date(Date.parse('Mar 20, 2001')))
