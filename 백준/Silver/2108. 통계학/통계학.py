import sys
from collections import Counter
user_input = int(sys.stdin.readline())
answer = []
for _ in range(user_input):
    answer.append(int(sys.stdin.readline()))

print(round(sum(answer)/user_input))
answer.sort()
print(answer[user_input//2])

cnt_li = Counter(answer).most_common()
if len(cnt_li) > 1 and cnt_li[0][1]==cnt_li[1][1]: #최빈값 2개 이상
    print(cnt_li[1][0])
else:
    print(cnt_li[0][0])

print(answer[-1]-answer[0])