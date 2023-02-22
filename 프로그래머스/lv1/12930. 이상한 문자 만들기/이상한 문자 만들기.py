def solution(s):
    return " ".join(map(lambda x:"".join([item.lower() if idx%2 else item.upper() for idx,item in enumerate (x)]) , s.split(" ")))