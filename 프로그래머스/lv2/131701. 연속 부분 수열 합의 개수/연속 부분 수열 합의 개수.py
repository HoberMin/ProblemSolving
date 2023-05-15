def solution(elements):
    answer = []
    i=1
    for i in range(1,len(elements)+1):
        for _ in range(len(elements)):
            answer += [sum(elements[0:i])]
            elements = elements[1:]+[elements[0]]
        i += 1
    return len(set(answer))
        