def solution(A, B):
    answer = 0
    A1 = list(A)
    B1 = list(B)
    
    while(A1!=B1):
        A1.insert(0,A1[len(A)-1])
        del(A1[len(A1)-1])
        answer += 1
        print(A1)
        if(len(A)<=answer):
            answer = -1
            break;
    return answer
    