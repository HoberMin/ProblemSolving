def solution(s):
    return " ".join(list(map(lambda x: "".join([item.lower() if i%2 else item.upper() for i,item in enumerate(x)]) ,s.split(" "))))