import math
def solution(array, n):
    array.sort(reverse=True)
    gap_min = max(array)
    answer = min(array)
    for i in array:
        if(gap_min>=math.fabs(n-i)):
            gap_min=math.fabs(n-i)
            answer = i
    return answer