def solution(str1, str2):
    a = ""
    for i,j in zip(str1,str2):
        a += i+j
    return a