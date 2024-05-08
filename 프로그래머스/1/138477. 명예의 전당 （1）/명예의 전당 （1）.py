def solution(k, score):
    prize = []
    answer = []
    for i in score:
        if len(prize) < k :
            prize.append(i)
        else:
            if min(prize) < i :
                prize.remove(min(prize))
                prize.append(i)
        answer.append(min(prize))
    return answer
    