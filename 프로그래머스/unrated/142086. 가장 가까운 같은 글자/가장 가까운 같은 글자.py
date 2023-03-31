def solution(s):
    stack=""
    answer=[]
    for idx,item in enumerate(s):
        if item in stack:
            answer.append(idx - stack.rfind(item))
            stack += item
        else:
            answer.append(-1)
            stack += item
    return answer