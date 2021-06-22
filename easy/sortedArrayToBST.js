function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  const construct = (nums, left, right) => {
    if (left > right || right < left) return null;
    const middle = Math.floor((left + right) / 2);
    const tree = new TreeNode(nums[middle], null, null);
    tree.left = construct(nums, left, middle - 1);
    tree.right = construct(nums, middle + 1, right);
    return tree;
  };

  return construct(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
