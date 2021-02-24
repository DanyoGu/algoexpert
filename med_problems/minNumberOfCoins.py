def minNumberOfCoinsForChange(n, denoms):
    # Write your code here.
    ways = [float("inf") for x in range(n+1)]
	ways[0] = 0

	for denom in denoms:
		for amount in range(len(ways)):
			if denom <= amount:
				ways[amount] = min(ways[amount], ways[amount - denom] + 1)
	
	return ways[-1] if ways[-1] != float("inf") else -1