def solution(s, n):
    answer =""
    for i in s:
        if i == " ":
            answer += i
        elif 'A'<=i<='Z' and ord(i)+n > ord('Z'):
            answer += chr(ord(i)+n-26)
        elif 'a'<=i<='z' and ord(i)+n > ord('z'):
            answer += chr(ord(i)+n-26)
        else:
            answer += chr(ord(i)+n)
    return answer