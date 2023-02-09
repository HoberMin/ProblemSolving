def solution(x):
    d = 2
    answer = []
    while d <= x:
        if x % d == 0:
            x = x//d
            if (d not in answer):
                answer.append(d)
        else:
            d = d + 1
    return answer