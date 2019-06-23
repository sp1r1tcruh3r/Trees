/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);

filter(n => n.type === 'directory', tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'etc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'nginx',
//           type: 'directory',
//           meta: {},
//           children: [{
//             name: 'conf.d',
//             type: 'directory',
//             meta: {},
//             children: [],
//           }],
//         },
//         {
//           name: 'consul',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//       ],
//     },
//   ],
// }
*/

// BEGIN (write your solution here)
const filter = (func, tree) => {
  if (!func(tree)) return null;
  if (tree.type === 'file') {
    return tree;
  }
  return { ...tree, children: tree.children.map(el => filter(func, el)).filter(v => v) };
};
export default filter;
// END
