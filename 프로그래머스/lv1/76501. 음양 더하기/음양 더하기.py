def solution(absolutes, signs):
    answer = 0
    for item,idx in  zip(absolutes,signs):
        if idx:
            answer += item
        else:
            answer-=item
    return answer