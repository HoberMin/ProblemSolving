def solution(left, right):
    hap = 0
    for i in range(left,right+1):
        if (i**0.5) == int(i**0.5):
            hap-=i
        else:
            hap+=i
    return hap
#약수의 개수가 홀수이려면 루트값이 정수여야 한다. ex)4,9,16
            