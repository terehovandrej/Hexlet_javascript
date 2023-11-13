import fs from 'fs';

// // BEGIN (write your solution here)
// export default function print(dir) {
// // префиксом нижнего подчёркивания обозначается неиспользуемый аргумент
//
// // readFile запускает на выполнение задачу чтения файла.
// // Вторым параметром обязательно передать utf-8. Только в этом случае данные прочитаются в строковом виде.
//     fs.readFile(dir, 'utf-8', (_error, data) => {console.log(data)});
// }
//
//
//
// print('test.js')


export function move (dir1, dir2, cb) {
    fs.readFile(dir1, (_err1, data) => {
        if (_err1) {
            cb(_err1);
            return;
        }
        fs.writeFile(dir2, data, (_err2) => {
            if (_err2) {
                cb(_err2);
                return;
            }
            fs.unlink(dir1, cb)
        })
    })

}
const cb = (error) => {
    if (error) {
        console.log('oops');
        return;
    }
    console.log('yes!');
}

move('test2.js', 'test1.js', cb)