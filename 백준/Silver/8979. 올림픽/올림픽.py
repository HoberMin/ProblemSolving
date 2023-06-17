import sys
from collections import Counter
total, target = map(int,input().strip().split(" "))

dic = {}
for _ in range(total):
    [a,b,c,d] = sys.stdin.readline().strip().split(" ")
    dic[a] = b+c+d

score = sorted(dic.values(),key=lambda x : (-int(x)))
lanking = sorted(dic.items(),key=lambda x : (-int(x[1])))

flag = 1
temp = 0
stack = [-1]

for i in lanking:
    
    if i[1] == stack[-1]:
        flag -= 1
        temp += 1
    else:
        stack.append(i[1])
        flag += temp

    if int(i[0]) == target:
        print(flag)
    else:
        flag += 1