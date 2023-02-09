def solution(x):
    d = 2
    answer = []
    while d <= x:
        if x % d == 0:
            x = x//d
            answer.append(d)
        else:
            d = d + 1
    new_list = list(set(answer))
    new_list.sort()
    return new_list