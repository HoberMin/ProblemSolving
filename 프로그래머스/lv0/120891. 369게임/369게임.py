def solution(order):
    count = 0
    for i in str(order):
        if (int(i)%3==0 and i!="0"):
            count+=1
    return count