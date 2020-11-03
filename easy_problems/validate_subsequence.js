function isValidSubsequence(array, sequence) {
  // Write your code here.
	for(const num of array) {
		if(num === sequence[0]) sequence.shift();
	}
	return sequence.length === 0;
}