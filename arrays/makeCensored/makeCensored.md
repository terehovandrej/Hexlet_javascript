Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

Текст
Набор стоп слов
Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

Примеры
import makeCensored from '../strings';

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';