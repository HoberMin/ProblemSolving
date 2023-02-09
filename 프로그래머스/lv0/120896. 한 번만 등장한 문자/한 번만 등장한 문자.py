def solution(s):
    answer = sorted([i for i in s if s.count(i)==1])
    
    return "".join(answer)