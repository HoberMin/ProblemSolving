user_input = int(input())
for _ in range(user_input):
    N,M = map(int,input().strip().split(" "))
    queue = list(map(int,input().strip().split(" ")))
    idx = list(range(N))
    cnt = 0
    while(True) :
        if max(queue) == queue[0]:
            cnt += 1
            if idx[0] == M:
                print(cnt)
                break
            else:
                queue = queue[1:]
                idx = idx[1:]
        else:
            queue = queue[1:] + [queue[0]]
            idx = idx[1:]+[idx[0]]