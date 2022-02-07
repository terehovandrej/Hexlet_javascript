emails.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в константе freeEmailDomains.



const freeEmailDomains = [
'gmail.com',
'yandex.ru',
'hotmail.com',
'yahoo.com',
];


Примеры
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

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
Другие примеры смотрите в модуле с тестами.

Подсказки
При решении вам может понадобится функция get() из библиотеки lodash.