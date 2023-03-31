from itertools import *
def solution(numbers):
    return sorted(set(sum(i) for i in combinations(numbers,2)))
    
#set은 정렬을 보장해주지 않기 때문에 sort -> set (x) set -> sort 해줘야 한다.