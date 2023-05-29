def solution(phone_book):
    dic = {}
    for i in phone_book:
        dic[i]=0
    for item in dic:
        temp = ""
        for j in item:
            temp+=j
            if temp in dic and temp != item:
                return False
    return True