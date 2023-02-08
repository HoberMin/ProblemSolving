def solution(num_list, n):
    answer = []
    for i in range(0,len(num_list),n): #i는 0,3,6
        answer.append(num_list[i:i+n])
    return answer