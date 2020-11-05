// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
    const sums = [];
    calcSums(root, 0, sums);
    return sums;
}
function calcSums(node, runningSum, sums) {
    if(!node) return;
    const newRunningSum = runningSum + node.value;
    if(node.left === null && node.right === null) {
        sums.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
