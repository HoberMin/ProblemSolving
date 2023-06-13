import sys

user_input = int(input())
stack = []
for _ in range(user_input):
    input_data = sys.stdin.readline().strip().split(" ")
    if input_data[0] == "push":
        stack.append(int(input_data[1]))
    elif input_data[0] == "pop" and len(stack)>=1:
        print(stack.pop())
    elif input_data[0] == "pop" and len(stack)==0:
        print(-1)
    elif input_data[0] == "size":
        print(len(stack))
    elif input_data[0] == "empty" and len(stack)==0:
        print(1)
    elif input_data[0] == "empty" and len(stack)>=1:
        print(0)
    elif input_data[0] == "top" and stack != [] :
        print(stack[-1])
    else:
        print(-1)