export default function protect(target, protectedProps) {
    return new Proxy(target, {
        set: (target, prop, value) => {
            if (protectedProps.includes(prop)){
                throw new Error(`Access to '${prop}' is restricted `);
            }
            // если свойство есть в объекте, proxy позволяет нам его переписать
            if (prop in target) {
                target[prop] = value;
                // при успешной записи, метод set() должен вернуть true
                return true;
            } else {
                // если свойства нет в объекте, то выбросится ошибка, либо можем вернуть false
                throw new Error(`Cannot rewrite non-existed property '${prop}'`);
            }
        },
        get: (target, prop) => {
            if (protectedProps.includes(prop)){
                throw new Error(`Access to '${prop}' is restricted `);
            }
            if (prop in target) {
                return target[prop];
            }

            return 0;
        },
    })
}


const user = {
    name: 'John',
    age: 25,
    password: 'secret',
};

const protectedProps = ['password'];

const protectedUser = protect(user, protectedProps);
// protectedUser.name; // John
// protectedUser.age; // 25
// protectedUser.password; // Error: Access to 'password' is restricted

protectedUser.name = 'Jane'; // установит значение 'Jane' в свойство 'name'
// protectedUser.password = 'newPassword'; // Error: Access to 'password' is restricted

console.log(protectedUser)
console.log(protectedUser.password)