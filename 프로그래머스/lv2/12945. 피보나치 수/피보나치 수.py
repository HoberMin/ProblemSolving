def solution(n):
    F = [0,1]
    idx=2
    while(n<100001):
        F.append(F[idx-1] + F[idx-2])
        if idx == n:
            return F[n]%1234567
        idx+=1
            
        