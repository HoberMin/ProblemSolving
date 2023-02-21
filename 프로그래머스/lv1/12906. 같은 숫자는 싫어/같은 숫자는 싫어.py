def solution(arr):
    answer = [arr[0]]
    for idx in range(1,len(arr)):
        if arr[idx-1] == arr[idx]:
            pass
        else:
            answer.append(arr[idx])
    return answer