/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const recurse = (left, right) => {
    if (left === null && right === null) return true;
    if (left?.val === right?.val) {
      return (
        true &&
        recurse(left.left, right.right) &&
        recurse(left.right, right.left)
      );
    }
    return false;
  };

  return recurse(root.left, root.right);
};
