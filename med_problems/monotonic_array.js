function isMonotonic(array) {
  // Write your code here.
	let isNotDecreasing = true;
	let isNotIncreasing = true;
	let i = 1
	while(i < array.length){
		if(array[i] < array[i - 1]) isNotDecreasing = false;
		if (array[i] > array[i - 1]) isNotIncreasing = false;
		i++;
	}
	
	return isNotDecreasing || isNotIncreasing;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
