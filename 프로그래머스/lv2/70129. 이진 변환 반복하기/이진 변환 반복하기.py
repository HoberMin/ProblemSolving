def solution(s):
    cnt = 0
    i=0
    while s!="1":
        i+=1
        cnt += s.count("0")
        s = bin(len("".join(s.split("0"))))[2:]
    return [i,cnt]
        