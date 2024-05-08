from itertools import combinations
def solution(numbers):
    
    li = list(combinations(numbers, 2))
    answer = [sum(i) for i in li]
    
    return list(sorted(set(answer)))