/*
Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный массив.

const list = [1, 2, [3, 5], [[4, 3], 2]];

// [1, 2, 3, 5, 4, 3, 2]
flatten(list);

Подсказки

    Array.isArray - проверяет является ли элемент массивом.
*/
const flatten = (arr) => {
  const func = (acc, elem) => {
    if (!Array.isArray(elem)) {
      return [...acc, elem];
    }
    return [...acc, ...elem.reduce(func, [])];
  };
  return arr.reduce(func, []);
};
export default flatten;


//Teacher
// BEGIN
const flatten = list => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);

export default flatten;
// END
