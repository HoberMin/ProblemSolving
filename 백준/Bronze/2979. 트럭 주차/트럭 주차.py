import sys
A,B,C = map(int,input().split(" "))
payment = 0
answer = []
for _ in range(3):
    first, second = map(int , sys.stdin.readline().split())
    answer += list(range(first,second))

for i in range(min(answer), max(answer)+1):
    if answer.count(i) == 1:
        payment += A
    elif answer.count(i) == 2:
        payment += 2*B
    elif answer.count(i) == 3:
        payment += 3*C

print(payment)
