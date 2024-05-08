def solution(a, b, n):
    rest = 0
    answer = 0
    while (n+rest) >= a:
        n = n+rest
        print(n)
        answer += (n//a) * b
        rest = (n%a)
        n = (n//a) * b
    return answer
   
    
# a
# a
# a
# a

# 2로 나눈 몫 -> 더해주고
# rest가 a가 되면 b를 더해주고