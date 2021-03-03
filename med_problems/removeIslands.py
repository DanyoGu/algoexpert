def removeIslands(matrix):
    # Write your code here.
	length = len(matrix[0])
	width = len(matrix)
	islands = []

	for i in range(width):
		for j in range(length):
			currentEle = matrix[i][j]
			if currentEle == 1:
				islands += findIslands(matrix, i, j, length, width)
			
	print(islands)
	for island in islands:
		matrix[island[0]][island[1]] = 0
	
    return matrix

def findIslands(matrix, i, j, length, width):
	coords = [[i, j]]
	dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
	queue = [[i, j]]
	visited = [[False for value in row] for row in matrix]
	while len(queue) != 0:
		current = queue.pop(0)
		currentX = current[0]
		currentY = current[1]
		visited[currentX][currentY] = True
		
		for direction in dirs:
			newX = currentX + direction[0]
			newY = currentY + direction[1]
			
			if newX < 0 or newX > width - 1 or newY < 0 or newY > length - 1:
				return []
			if matrix[newX][newY] == 1 and visited[newX][newY] == False:
				queue.append([newX, newY])
				coords.append([newX, newY])
	return coords