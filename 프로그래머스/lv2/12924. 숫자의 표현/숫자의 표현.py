def solution(n):
    i = 1
    cnt=0
    while(n>0):
        if n%i==0:
            cnt+=1
        n-=i
        i+=1
    return cnt