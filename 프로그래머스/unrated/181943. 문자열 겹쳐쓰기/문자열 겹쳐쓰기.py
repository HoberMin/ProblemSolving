def solution(my_string, overwrite_string, s):
    return my_string[:s]+overwrite_string+my_string[s+len(overwrite_string):]


# 1. my_string 에서 인덱스 s부터 overwrite의 길이까지 슬라이싱한 부분의 문자열
# 2. overwrite로 변환
