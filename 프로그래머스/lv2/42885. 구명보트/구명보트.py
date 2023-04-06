def solution(people, limit):
    lower = 0
    higher = len(people)-1
    boat =0
    people.sort()
    while(lower<=higher):
        if people[lower]+people[higher] <= limit:
            lower+=1
        higher-=1
        boat +=1
    return boat

# 정렬해야함
# 제일 가벼운사람 타고 + 무거운사람부터뒤져서 그다음 무거운사람이타야함
