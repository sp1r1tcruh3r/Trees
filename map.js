/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'ETC',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NGINX',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'HOSTS', type: 'file', meta: {} },
//   ],
// }
*/

const map = (func, tree) => {
  if (tree.type === 'file') {
    return func(tree);
  }
  return { ...func(tree), children: tree.children.map(el => map(func, el)) };
};
export default map;
// END
