from collections import Counter
def solution(id_list, report, k):
    dic = {}
    reported_list = []
    ban_list = []
    answer = []
    for i in report:
        reporter,reported = i.split(" ")
        if reporter in dic:
            dic[reporter].append(reported)
        else:
            dic[reporter] = [reported]
    #신고자 : [신고당한사람]
    
    for i in dic.items():
        a,b = i
        dic[a] = list(set(b))   
        reported_list += list(set(b))
    #한사람이 여러번 신고하면 중복제거
    
    counter = Counter(reported_list)
    
    for i in counter.items():
        if i[1] >= k:
            ban_list.append(i[0])
    #여러번 신고당한사람 정지
    for j in id_list:
        stack = 0
        if j in dic: #신고한사람명단안에 아이디가 있으면
            for q in dic[j]:
                if q in ban_list:
                    stack += 1 #신고한 사람들 중 밴리스트안에 있으면 스택증가
        answer.append(stack)
    
    return answer

#for문 돌다가 banlist에서 중복으로 체크해버림,,, 
#muzi frodo muzi frodo 일때 벤리스트는 frodo , muzi 돌때 frodo두번돌아버림 그냥 나도 돌아버림
#리팩토링 좀 해야할듯?