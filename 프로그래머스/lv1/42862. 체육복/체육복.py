def solution(n, lost, reserve):
    lost1 = sorted(lost)
    reserve1 = sorted(reserve)
    lost2 = set(lost1)-set(reserve1)
    reserve2 = set(reserve)-set(lost1)
    for i in reserve2:
        if i-1 in lost2:
            lost2.remove(i-1)
            continue
        if i+1 in lost2:
            lost2.remove(i+1)
    
    return n - len(lost2)