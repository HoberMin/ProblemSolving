def solution(n):
    def isprime(m):
        for i in range(3, round(m **0.5)+1, 2): 
            if(m % i == 0):
                return False
        return True
    return len([i for i in range(2, n+1) if(i == 2 or isprime(i) and i%2 != 0)])