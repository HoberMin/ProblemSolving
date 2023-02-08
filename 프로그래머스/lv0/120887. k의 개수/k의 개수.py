def solution(i, j, k):
    new_sentense = ""
    for item in range(i,j+1):
        new_sentense += str(item)
    
    return new_sentense.count(str(k))