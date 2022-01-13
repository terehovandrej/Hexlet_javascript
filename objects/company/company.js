const is = (company1, company2) => {
    return (company1.name === company2.name && company1.state === company2.state && company1.website === company2.website)
}

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

console.log(is(company1, company2))// true)