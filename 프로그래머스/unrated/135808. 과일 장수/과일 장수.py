def solution(k, m, score):
    score.sort(reverse=True)
    arr=[score[i:i+m] if len(score[i:i+m])>=m else [] for i in range(0,len(score),m)]
    return sum([min(i)*m for i in arr if i != []])