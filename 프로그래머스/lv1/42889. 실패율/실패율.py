def solution(N, stages):
    dic_count = {}
    trial = len(stages)
    answer = {}
    for i in range(N+1): #모두 다 통과한 사람 까지 구하는 숫자
        dic_count[str(i+1)] = stages.count(i+1)
    
    #실패율
    for idx,j in enumerate (dic_count.values()):
        if idx+1==N:
            if trial == 0:
                answer[str(idx+1)] = 0
            else:
                answer[str(idx+1)] = j/trial
            break;
        else:
            if trial == 0:
                answer[str(idx+1)] = 0
            else:
                answer[str(idx+1)] = j/trial
            trial -= j
    return list(map(int,sorted(answer, key = lambda x: (answer[x],-int(x)),reverse=True)))

# 1. for문으로 n+1까지 단계별 통과자를 dict_1로 구해야 함
# 2. dict_1을 for문으로 돌면서 실패율을 구하고 새로운 dict_2를 생성
# 3. 각 실패율은 dict_1.values() / trial 하고 trial-=dict_1.values해줘야함

