# This is an input class. Do not edit.
class AncestralTree:
    def __init__(self, name):
        self.name = name
        self.ancestor = None


def getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo):
    # Write your code here.
	depth1 = getDepth(descendantOne, topAncestor)
	depth2 = getDepth(descendantTwo, topAncestor)
	
	if depth1 > depth2:
		return backtrack(descendantOne, descendantTwo, depth1 - depth2)
	else:
		return backtrack(descendantTwo, descendantOne, depth2 - depth1)

def getDepth(descendant, topAncestor):
	depth = 0
	while descendant != topAncestor:
		depth += 1
		descendant = descendant.ancestor
	return depth
	
def backtrack(descendantOne, descendantTwo, difference):
	count = 0
	while count < difference:
		descendantOne = descendantOne.ancestor
		count += 1
	while descendantOne != descendantTwo:
		descendantOne = descendantOne.ancestor
		descendantTwo = descendantTwo.ancestor
	
	return descendantOne