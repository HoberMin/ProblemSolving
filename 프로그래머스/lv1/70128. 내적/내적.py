def solution(a, b):
    return sum(item1*item2 for item1,item2 in zip(a,b))
    