def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        answer.append(bin(i|j)[2:].zfill(n).replace("1","#").replace("0"," "))
    return answer
    
#bin함수는 앞에 0을 채워주지 않기 때문에 0을 채워놓고 코드를 실행시켜야 한다.
#ex)2를 2진으로 바꾸면 ob010 x ob10 으로 출력됨