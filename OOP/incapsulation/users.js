// BEGIN (write your solution here)
import makeUser from "./user.js";
const user1 = makeUser({
    friends: [makeUser({ id: 2 }), makeUser({ id: 8 }), makeUser({ id: 100 })],
});
const user2 = makeUser({
    friends: [makeUser({ id: 2 }), makeUser({ id: 7 }), makeUser({ id: 8 })],
});



const mutualFriends = (user1, user2) => {
    let arrA = user1.getFriends()
    let arrB = user2.getFriends()
    return arrA.filter(a => arrB.some(b => a.id === b.id));
}
console.log()
console.log(user1.getFriends())
console.log(user2.getFriends())
console.log(mutualFriends(user1, user2))