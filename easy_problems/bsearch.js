function binarySearch(array, target) {
	return bSearch(array, target, 0, array.length - 1)
}
function bSearch(array, target, left, right) {
  // Write your code here.
	if(left > right) return -1;

	let middle = Math.floor((left + right)/2);

	if(array[middle] === target){
		return middle;
	}
	else if(target < array[middle]) {
		return bSearch(array, target, left, middle - 1);
	}
	else{
		return bSearch(array, target, middle + 1, right);
	}
}

// Do not edit the line below.
exports.binarySearch = binarySearch;