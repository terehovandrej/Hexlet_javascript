// count groupBy groupby reduce includes slice indexOf
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',

]



const groupBy = (array) => {
    const result = {};
    array.reduce((acc, el) => {
    if (freeEmailDomains.includes(el)){
        if (!result.hasOwnProperty(el)) {
            result[el] = 0;
        }
        result[el]+=1
    }

    }, {});
    return result
}

const getFreeDomainsCount = (emails) => {

    return groupBy(emails.map((email) => {return email.slice(email.indexOf('@')+1)}))

}

console.log(getFreeDomainsCount(emails))

// // // {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };