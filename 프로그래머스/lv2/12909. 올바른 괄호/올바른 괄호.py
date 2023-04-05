def solution(s):
    i=0
    right_count = 0
    left_count=0
    while(i<len(s)):
        if s[i]=="(":
            left_count +=1 
        else:
            right_count += 1
        if right_count > left_count:
            return False
        i+=1
    if left_count == right_count:
        return True
    return False