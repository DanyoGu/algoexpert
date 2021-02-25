def countPairs(numbers, k):
    # Write your code here
    count = 0

    numbers = list(set(numbers))
    numbers.sort() 
 
    l=0
    r=0
 
    while r<len(numbers):
        if numbers[r]-numbers[l]==k:
            count+=1
            l+=1
            r+=1
        elif numbers[r]-numbers[l]>k: 
            l+=1
        else:
            r+=1
    
    return count