/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

findFilesByName(tree, 'co');
// => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']

Обратите внимание на то, что возвращается не просто имя файла, а полный путь до файла, начиная от корня.
Подсказки

    Для построения путей используйте функцию path.join.
    Проверку вхождения строк можно делать с помощью функции str.includes(substr).
*/
const findFilesByName = (tree, substr) => {
  const iter = (el, p, acc) => {
    const parents = path.join(p, el.name);

    if (el.type === 'file') {
      return el.name.includes(substr) ? [...acc, parents] : acc;
    }

    return el.children.reduce((acc2, el2) => iter(el2, parents, acc2), acc);
  }

  return iter(tree, '', []);
};

export default findFilesByName;
