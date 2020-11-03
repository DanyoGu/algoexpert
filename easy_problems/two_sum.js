//O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
	
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			if(j > i && array[i] + array [j] === targetSum) return [array[i], array[j]]
		}
	}
	return [];
}

//O(n) time | O(n) space

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let nums = {}
	for(const num of array) {
		let potentialMatch = targetSum - num;
		if(potentialMatch in nums) {
			return [potentialMatch, num];
		} else {
			nums[num] = true;
		}
	}
	return [];
}

//O(nlog(n)) time | O(n) space

function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		const currentSum = array[left] + array[right]
		if(currentSum === targetSum) {
			return [array[left], array[right]];
		}else if(currentSum < targetSum) {
			left++;
		}else if(currentSum > targetSum) {
			right--;
		}
	}
	return [];
}