def compareStrings(s1, s2):
    str1 = []
    str2 = []
    for char in s1:
        if char == '#' and len(str1) > 0:
            str1.pop(-1)
        elif char != '#':
            str1.append(char)
    for char in s2:
        if char == '#' and len(str2) > 0:
            str2.pop(-1)
        elif char != '#':
            str2.append(char)
    print(str1)
    print(str2)
    a = "".join(str1)
    b = "".join(str2)
    if a == b:
        return 1
    else:
        return 0

#DFS
def reachTheEnd(grid, maxTime):
    def dfs(row, col, height, width, visited, time):
        if row == height - 1 and col == width - 1 and time <= maxTime:
            return True
        if time > maxTime:
            return False
        for x, y in [(0,1), (1,0), (0,-1), (-1,0)]:
            newX = row + x
            newY = col + y
            if newX >= 0 and newX < height and newY >= 0 and newY < width and \
                    grid[newX][newY] == "." and visited[newX][newY] == False:
                visited[newX][newY] = True
                if dfs(newX, newY, height, width, visited, time+1):
                    return True
                visited[newX][newY] = False
        return False
    visited = [[False] * len(grid[0]) for _ in range(len(grid))]
    visited[0][0] = True
    height = len(grid)
    width = len(grid[0])
    if dfs(0, 0, height, width, visited, 0):
        return "Yes"
    else:
        return "No"
#BFS
def reachTheEnd(grid, maxTime):
    visited = [[False] * len(grid[0]) for _ in range(len(grid))]
    queue = [[0,0]]
    count = 0
    height = len(grid)
    width = len(grid[0])
    while queue:
        currentMoves = len(queue) 
        if count > maxTime:
            return 'No'
        while currentMoves > 0:
            print(visited)
            pos = queue.pop(0)
            row, col = pos
            if row == height-1 and col == width-1 and count <= maxTime:
                return 'Yes'
            visited[row][col] = True
            for x, y in [(0,1), (1,0), (0,-1), (-1,0)]:
                newX = x + row
                newY = y + col
                if newX >= 0 and newX < height and newY >= 0 and newY < width and \
                        grid[newX][newY] == "." and visited[newX][newY] == False:
                    queue.append([newX,newY])
            currentMoves -= 1
        count += 1
    return 'No'

def numPlayers(k, scores):
    ranks = [] #[1, ]
    rank = 1
    prevScore = 0 #100
    scores.sort(reverse=True)
    for i in range(0, len(scores)):
        score = scores[i]
        if not ranks:
            ranks.append(rank)
            prevScore = score
        if score < prevScore:
            ranks.append(i+1)
            rank = i+1
        elif score == prevScore:
            prevRank = ranks[-1]
            ranks.append(prevRank)
    count = 0
    for rank in ranks:
        if rank <= k:
            count += 1
    return count

    class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 1:
            return intervals
        intervals.sort()
        result = [intervals[0]]
        for interval in intervals[1:]:
            prevInterval = result[-1]
            if interval[0] <= prevInterval[1]:
                result[-1][0] = min(prevInterval[0], interval[0])
                result[-1][1] = max(prevInterval[1], interval[1])
            else:
                result.append(interval)
        return result

        #comment goes here

        