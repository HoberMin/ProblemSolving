def solution(n):
    return int("".join(sorted(str(n), reverse=True)))
#sorted는 list로 반환