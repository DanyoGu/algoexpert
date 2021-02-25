def minNumberOfCoinsForChange(n, denoms):
    # Write your code here.
    ways = [float("inf") for x in range(n+1)]
	ways[0] = 0

	for denom in denoms:
		for amount in range(len(ways)):
			if denom <= amount:
				ways[amount] = min(ways[amount], ways[amount - denom] + 1)
	
	return ways[-1] if ways[-1] != float("inf") else -1

        count =0
     
    # Sort array elements
    numbers.sort() 
 
    l =0
    r=0
 
    while r<len(numbers):
        if numbers[r]-numbers[l]==k:
            count+=1
            l+=1
            r+=1
             
        # numbers[r] - numbers[l] < sum
        elif numbers[r]-numbers[l]>k: 
            l+=1
        else:
            r+=1
    return count