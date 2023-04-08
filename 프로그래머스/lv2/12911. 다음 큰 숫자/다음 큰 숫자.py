def solution(n):
    count_1 = bin(n).count("1")#n의 1개수
    
    while 1:
        n+=1
        count_n = bin(n).count("1")
        if count_n==count_1:
            return n