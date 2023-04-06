def solution(n):
    cnt = 1
    while n!=1:
        if n%2:
            n -= 1
            cnt +=1
        else:
            n= n//2
    return cnt