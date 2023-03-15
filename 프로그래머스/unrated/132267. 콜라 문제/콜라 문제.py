def solution(a, b, n):
    cnt = 0
    while a<=n:
        return_bottle = (n//a)*b
        cnt += return_bottle
        n = return_bottle + n%a
        
    return cnt