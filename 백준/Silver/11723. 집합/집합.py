import sys
input_data = int(input())

answer = set()

for _ in range(input_data):
    S = sys.stdin.readline().strip().split(" ")
    if S[0] == "add":
        answer.add(int(S[1]))
    
    elif S[0] == "remove":
        answer.discard(int(S[1]))
    
    elif S[0] == "check":
        if int(S[1]) in answer:
            print(1)
        else:
            print(0)
    
    elif S[0] == "toggle":
        if int(S[1]) in answer:
            answer.remove(int(S[1]))
        else:
            answer.add(int(S[1]))
    
    elif S[0] == "all":
        answer = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20}
    
    elif S[0] == "empty":
        answer = set([])