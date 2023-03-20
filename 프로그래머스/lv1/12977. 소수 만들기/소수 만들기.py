from itertools import *
def solution(nums):
    answer = 0
    sum_arr = list(map(sum,combinations(nums,3)))
    for i in sum_arr:
        if is_prime(i):
            answer += 1
    return answer

def is_prime(item):
    for j in range(2,int(item**0.5)+1):
        if item%j==0:
            return False
    return True