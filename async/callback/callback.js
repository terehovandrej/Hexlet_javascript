// @ts-check
/* eslint-disable no-console */

import fs from 'fs';

// BEGIN (write your solution here)
export default function print(dir) {
    const callback = (_error, data) => console.log(data);
// префиксом нижнего подчёркивания обозначается неиспользуемый аргумент

// readFile запускает на выполнение задачу чтения файла.
// Вторым параметром обязательно передать utf-8. Только в этом случае данные прочитаются в строковом виде.
    fs.readFile(dir, 'utf-8', callback);
}
// END
