def solution(a, b, c):
    list_1 = [a,b,c]
    list_2 = [int(list_1.count(i)) for i in list_1]
    print(list_2)
    
    num1 = list_1[0]**3+list_1[1]**3+list_1[2]**3
    num2 = list_1[0]**2+list_1[1]**2+list_1[2]**2
    num3 = sum(list_1)
    
    if 3 in list_2:
        return num1*num2*num3
    if 2 in list_2:
        return num3*num2
    return num3