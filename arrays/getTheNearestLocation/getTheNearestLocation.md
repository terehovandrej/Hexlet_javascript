На многих картах, например, google maps реализован поиск мест, находящихся рядом с выбранной точкой, например, 
с текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощенном варианте.

Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место - это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y.


Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать. Поэтому решите эту задачу без обращения к индексам массивов.

Подсказки
Расстояние между точками высчитывается с помощью функции getDistance.

