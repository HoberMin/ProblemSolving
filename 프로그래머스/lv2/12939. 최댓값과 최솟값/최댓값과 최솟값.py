def solution(s):
    s_max = max(map(int,s.split(" ")))
    s_min = min(map(int,s.split(" ")))
    return " ".join([str(s_min),str(s_max)])