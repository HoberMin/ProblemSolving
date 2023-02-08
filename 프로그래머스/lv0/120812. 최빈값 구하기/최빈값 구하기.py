from collections import Counter
def solution(array):
    count_array = Counter(array)
    maximum = max(count_array.values())
    answer = []
    for key,value in count_array.items():
        if maximum == value:
            answer.append(int(key))
    return -1 if(len(answer)>1) else answer[0]