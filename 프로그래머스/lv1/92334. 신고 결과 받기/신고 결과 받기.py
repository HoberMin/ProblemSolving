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
    
    for i in dic.values():
        reported_list += list(set(i))     
    #한사람이 여러번 신고하면 중복제거
    
    counter = Counter(reported_list)
    
    for i in counter.items():
        if i[1] >= k:
            ban_list.append(i[0])
    #여러번 신고당한사람 정지
    
    for j in id_list:
        stack = 0
        temp_ban = []
        temp_ban += ban_list
        if j in dic: #신고한사람명단안에 아이디가 있으면
            for q in dic[j]:
                if q in temp_ban:
                    stack += 1 #신고한 사람들 중 밴리스트안에 있으면 스택증가
                    temp_ban.remove(q)
        answer.append(stack)
    
    return answer