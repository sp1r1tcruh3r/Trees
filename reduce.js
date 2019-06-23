// BEGIN (write your solution here)
const reduce = (func, tree, acc) => {
  const newAcc = func(acc, tree);
  if (tree.type === 'file') {
    return newAcc;
  }
  return tree.children.reduce((iAcc, n) => reduce(func, n, iAcc), newAcc);
};
export default reduce;
// END
