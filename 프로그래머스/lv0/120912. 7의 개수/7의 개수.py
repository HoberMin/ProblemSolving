def solution(array):
    a =  list(map(lambda x: str(x), array))
    return "".join(a).count(str(7))