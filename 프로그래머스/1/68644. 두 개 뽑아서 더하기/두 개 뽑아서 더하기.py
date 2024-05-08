from itertools import combinations
def solution(numbers):
    
    answer = list(combinations(numbers, 2))
    
    answer = [sum(i) for i in answer]
    
    return list(sorted(set(answer)))