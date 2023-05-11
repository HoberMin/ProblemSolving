def solution(people, limit):
    lower_idx = 0
    higher_idx = len(people)-1
    boat_counting = 0
    people.sort()
    while(lower_idx<=higher_idx):
        if people[lower_idx]+people[higher_idx] <= limit:
            lower_idx+=1
        higher_idx-=1
        boat_counting +=1
    return boat_counting

# 최대인원은 두명이기에 무거운사람부터 태운다 1인1보트
# 단, 1보트에 2인까지 탑승가능하기에 제일무거운사람+제일가벼운사람<=한계 일땐 가벼운사람도 하나 카운팅
# 무거운사람을 역순으로 내리면서 한명씩 무게를 비교하고 가벼운사람과 무거운사람의 인덱스가 만날 때 모두탑승한것
# while문이 한번 돌 때 boat증가, 가장 무거운사람은 넘어갔으니 감소
