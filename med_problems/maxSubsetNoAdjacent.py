def maxSubsetSumNoAdjacent(array):
    # Write your code here.
	if len(array) == 0:
		return 0
	elif len(array) == 1:
		return array[0]
	first = array[0]
	second = max(array[0], array[1])

	maxSums = [first, second]
	
	for i in range (2, len(array)):
		maxSums.append(max(maxSums[i - 1], array[i] + maxSums[i - 2]))
	
	return maxSums[-1]

