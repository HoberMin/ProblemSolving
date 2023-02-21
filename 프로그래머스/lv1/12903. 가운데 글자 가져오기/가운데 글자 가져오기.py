def solution(s):
    length = len(s)//2
    if len(s)%2:
        return s[length:length+1]
    else:
        return s[length-1:length+1]
        