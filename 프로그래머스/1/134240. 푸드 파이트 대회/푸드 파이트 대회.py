def solution(food):
    answer = ''
    for index,value in enumerate(food):
        if value//2 != 0:
            answer += str(index)*(value//2)
        
    return answer + '0' + ''.join(reversed(list(answer)))