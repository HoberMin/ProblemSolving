def solution(numlist, n):
    num1 = sorted(numlist, key = lambda x :(abs(x-n),n-x))
    return num1