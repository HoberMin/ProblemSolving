user_input = int(input())
stack = []
for _ in range(user_input):
    call_num = int(input())
    if not call_num:
        stack.pop()
    else:
        stack += [call_num]
print(sum(stack))