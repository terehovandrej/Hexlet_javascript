// const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

// const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }

const make = (name, parametres = {}) => {
    return  { name, state: 'moderating', createdAt: Date.now(), ...parametres };
}


console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }))