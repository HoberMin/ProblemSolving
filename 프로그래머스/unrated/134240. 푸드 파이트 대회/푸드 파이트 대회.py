def solution(food):
    answer = ""
    for idx,item in enumerate(food[1:]):
        #idx = 0, item = 2
        answer += str(idx+1)*int(item/2)
    food_fighter = "".join(sorted(answer,reverse=True))
    return answer+"0"+food_fighter