def solution(array, n):
    arr=sorted(array, key=lambda x:(abs(x-n),x),reverse=True)
    return arr[-1]