const student = {
    name: 'Roman',
    age: 23,
    program: 'js-frontend',
};

// const newStuden = new Proxy(student, {
//     set: (target, prop, value) => {
//         // если свойство есть в объекте, proxy позволяет нам его переписать
//         if (prop in target) {
//             target[prop] = value;
//             // при успешной записи, метод set() должен вернуть true
//             return true;
//         } else {
//             // если свойства нет в объекте, то выбросится ошибка, либо можем вернуть false
//             throw new Error(`Cannot rewrite non-existed property '${prop}'`);
//         }
//     },
// });


export default function protect(target, protectedProps) {
    return new Proxy(target, {
        set: (target, prop, value) => {
            if (prop in protectedProps){
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
    })
}


// Если попытаться изменить несуществующее свойство, то выдаст ошибку:
const proxyStudent = protect(student)
// Error: Cannot rewrite non-existed property 'country'

// Если свойство уже есть, то ошибки не будет:
proxyStudent.sd = 'Alexandr';

console.log(student);