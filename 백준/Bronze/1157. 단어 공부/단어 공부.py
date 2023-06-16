string = input().upper()
new_string = []

for i in string:
    if i not in new_string:
        new_string.append(i)


count = [string.count(i) for i in new_string]

if count.count(max(count))>1:
    print("?")

else:
    print(new_string[count.index(max(count))])