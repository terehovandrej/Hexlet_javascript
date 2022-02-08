// BEGIN

// Определяем функцию для вычисления факториала
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

const generate = (n) => {
    const numbersCount = n + 1;
    const line = [];
    for (let i = 0; i < numbersCount; i += 1) {
        // Для вычисления числа заданной строки используем формулу
        // расчёта биноминальных коэффициентов  С(n, k) = n! / (k! * (n - k)!)
        line[i] = factorial(n) / (factorial(i) * factorial(n - i));
    }
    return line;
};

/* Alternative solutions

export default (row) => {
  const line = [1];

  for (let i = 0; i < row; i += 1) {
    const element = Math.round(line[i] * ((row - i) / (i + 1)));
    line.push(element);
  }

  return line;
};

----

const generateNextRow = (previousRow) => {

  В nextRow будем добавлять числа очередной строки
  const nextRow = [];
  Вычисляем все числа строки
  for (let i = 0; i <= previousRow.length; i += 1) {
    Вычисляем каждое число как сумму двух расположенных над ним чисел из предыдущей строки
    const first = previousRow[i - 1] || 0;
    const second = previousRow[i] || 0;
    Добавляем число в строку
    nextRow[i] = first + second;
  }

  return nextRow;
};

const generate = (rowNumber) => {
  currentRow содержит текущую строку.
  Начальное значение — вершина треугольника.

  let currentRow = [1];

  Последовательно формируем строку за строкой.
  Обработку начинаем со второй строки (счётчик начинается с единицы),
  так как начальная строка нам уже известна.
  Цикл закончит работу, когда дойдёт до нужной строки.

  for (let row = 1; row <= rowNumber; row += 1) {
    Формирование следующей строки вынесем в отдельную функцию.
    Обновляем текущую строку.
    Теперь текущей становится только-что вычисленная строка.

    currentRow = generateNextRow(currentRow);
  }
  После окончания работы цикла в currentRow окажется искомая строка.

  return currentRow;
};

*/

export default generate;
// END