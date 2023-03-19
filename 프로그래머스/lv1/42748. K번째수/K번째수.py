def solution(array, commands):
    answer = []
    for i in commands:
        [q,w,e] = i
        answer.append(sorted(array[q-1:w])[e-1])
    return answer