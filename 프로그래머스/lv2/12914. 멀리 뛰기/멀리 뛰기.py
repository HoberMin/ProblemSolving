def solution(n):
    pibonacci = [1,1,2]
    for i in range(3,n+1):
        pibonacci += [pibonacci[i-2]+pibonacci[i-1]]
    if n==1:
        return 1
    return pibonacci[-1]%1234567