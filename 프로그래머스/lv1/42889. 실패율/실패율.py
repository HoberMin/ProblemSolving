def solution(N, stages):
    answer = {}
    trial = len(stages)
    #실패율
    for i in range(1,N+1):
        if i==N+1:
            break;
        else:
            if trial == 0:
                answer[str(i)] = 0
            else:
                answer[str(i)] = stages.count(i)/trial
            trial -= stages.count(i)
    return list(map(int,sorted(answer, key = lambda x: (answer[x],-int(x)),reverse=True)))

# 1. for문으로 n+1까지 단계별 통과자를 dict_1로 구해야 함
# 2. dict_1을 for문으로 돌면서 실패율을 구하고 새로운 dict_2를 생성
# 3. 각 실패율은 dict_1.values() / trial 하고 trial-=dict_1.values해줘야함

