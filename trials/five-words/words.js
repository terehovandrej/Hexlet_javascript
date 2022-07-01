import * as fS from "fs";


// Запись/чтение словаря
let text = fS.readFileSync("./file.txt");
let array = text.toString().split(",")
// for (const word of array) {
//     if (word.toString().length === 5) result.push(word)
// }
// let file = fs.createWriteStream('array.txt');

//
// fs.writeFile('file.txt', result.toString(), function(error){
//     if(error) throw error; // ошибка чтения файла, если есть
//     console.log('Данные успешно записаны записать файл');
// });
//
let findWords = ()  => {
    // Исключить слова которые содержат буквы
    let exception_letters = "армиянк".split('')
    let ex_result = []
    let filtred_result = []

    console.log(exception_letters)
    for (const word of array) {
        let excep = true
        for (const letter of exception_letters) {
            if (word.includes(letter)) {excep = false; break}
        }
        if (excep) ex_result.push(word)
    }
    // фильтр по бувам на своем/не на своем месте
    for (const word of ex_result) {
        if (  word.includes('в')
            &&
            word.includes('е') &&
            word.includes('о')
            // word.includes('д') &&
            // word.includes('а')
            // word.charAt(2) === 'л' &&
            // word.charAt(3) === 'а'


    ) {
            filtred_result.push(word)
        }
    }
    console.log(filtred_result)
}
//
findWords()