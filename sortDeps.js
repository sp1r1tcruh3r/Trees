/*
sortDeps.js

Реализуйте и экспортируйте по умолчанию функцию sortDeps, которая принимает на вход список зависимостей и возвращает список (массив) отсортированных узлов.

Пример:

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];

Независимые библиотеки и цепочки библиотек должны быть в порядке, соответствующему порядку элементов в графе зависимостей.
*/

export default (deps) => {
  const add = (acc, node) => {
    const subDeps = deps[node] || [];
    const subAcc = subDeps.reduce(add, []);
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, {});
  return Object.keys(set);
};
//другой вариант
const sortDeps = (list) => {
  const arr = [];
  const buildArr = (key) => {
    if (!list[key] || list[key].length === 0) {
      if (!arr.includes(key)) {
        arr.push(key);
      }
    } else {
      list[key].forEach(buildArr);
      if (!arr.includes(key)) {
        arr.push(key);
      }
    }
  };
  Object.keys(list).forEach(buildArr);
  return arr;
};
export default sortDeps;
