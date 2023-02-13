def solution(my_str, n):
    string = ""
    answer = []
    for i,v in enumerate (my_str):
        string += v
        if (i+1)%n == 0:
            answer.append(string)
            string = ""
    if len(my_str) % n ==0:
        pass
    else : answer.append(string)
    return answer