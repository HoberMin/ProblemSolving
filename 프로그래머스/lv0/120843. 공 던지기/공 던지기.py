def solution(numbers, k):
    idx = 0
    while(k!=1):
        idx+=2
        k-=1
        if idx > len(numbers)-1:
            idx -= len(numbers)
    return numbers[idx]