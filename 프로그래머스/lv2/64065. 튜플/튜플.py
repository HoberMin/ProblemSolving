def solution(s):
    list_s = []
    answer_list = []
    s = s.replace("{","").replace("},"," ").replace("}","").split(" ")
    for i in s:
        new_i = i.split(",")
        list_s += [list(map(int,new_i))]
    #문자열 정리
    sorted_list = sorted(list_s,key = lambda x: len(x))
    #문자열의 길이에 따른 정렬
    for i in sorted_list:
        for j in i:
            if j not in answer_list:
                answer_list += [j]
    return answer_list
    
    
    
    

# 1. 문자열 처리를 진행한다
# 2. 리스트의 길이에 따른 정렬을 진행한다
# 3. 리스트의 길이가 늘어날 때 추가되는 아이템이 최종 answer배열의 다음 아이템으로 추가된다.
