a = int(input()) #길이
for i in range(a):
    print((i*" ")+("*"*(a*2-i*2-1)))