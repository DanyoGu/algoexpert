function findClosestValueInBst(tree, target) {
  // Write your code here.
	return findClosetValueInBstHelper(tree, target, tree.value);
}
function findClosetValueInBstHelper(tree, target, closestValue) {
	if(!tree.value) {
		return closestValue;
	}
	if (Math.abs(target - closestValue) > Math.abs(target - tree.value)) {
		closestValue = tree.value;
	}
	if (target < tree.value) {
		findClosetValueInBstHelper(tree.left, target, closestValue);
	}
	else if (target > tree.value) {
		findClosetValueInBstHelper(tree.right, target, closestValue);
    }
    else {
        return closestValue;
    }
}
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;