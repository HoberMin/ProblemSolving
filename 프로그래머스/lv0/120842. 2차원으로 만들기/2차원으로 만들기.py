def solution(num_list, n):
    answer = []
    for i in range(0,len(num_list),n): #i는 0,3,6
        two = []
        for j in range(i,i+n):
            two.append(num_list[j])
        answer.append(two)
    return answer