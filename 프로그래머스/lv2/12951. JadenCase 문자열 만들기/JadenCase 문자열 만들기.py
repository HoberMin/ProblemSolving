def solution(s):
    s = s.lower().split(" ")
    answer = [i.capitalize() for i in s]
    return " ".join(answer)
    # for i in s:
    #     block=""
    #     for j in range(len(i)): #각 블럭에서 for문 range돌려
    #         if i[j].isdigit():
    #             block+=i[j]
    #         elif j==0:
    #             block+=i[j].upper()
    #         else:
    #             block+=i[j]
    #     print(block)
    #     answer.append(block)
    # return " ".join(answer)