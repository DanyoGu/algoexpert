function findThreeLargestNumbers(array) {
  // Write your code here.
	let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;
	
	let i = 0
	while(i < array.length) {
		if(array[i] > first) {
			third = second;
			second = first;
			first = array[i];
		}
		else if(second <= array[i] && array[i] <= first) {
			third = second;
			second = array[i];
		}
		else if(third <= array[i] && array[i] <= second) {
			third = array[i]
		}
			i++;
	}

	return [third, second, first];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;