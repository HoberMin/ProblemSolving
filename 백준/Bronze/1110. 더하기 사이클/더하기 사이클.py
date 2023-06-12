def make_new_num(num):
    if num<10:
        return int(str(num)+str(num))
    else:
        return int(str(num%10)+str(sum(map(int,str(num)))%10)) 

first_num = int(input())
new_num = first_num
cnt = 0
while True:
    cnt += 1
    new_num = make_new_num(new_num)
    if first_num == new_num:
        break

print(cnt)