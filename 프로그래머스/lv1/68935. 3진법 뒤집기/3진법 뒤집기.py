def solution(n):
    answer = []

    while n > 0:
        n, mod = divmod(n, 3)
        answer.append(mod)
    answer.reverse()
    item=1
    py =0
    for i in answer:
        py += i*item
        item*=3
    return py