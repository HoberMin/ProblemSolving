import math
def solution(a, b):
    bunmo = int(b / math.gcd(a,b))
    
    while bunmo%5==0:
        bunmo = bunmo//5
    while bunmo%2==0:
        bunmo = bunmo//2
    if bunmo ==1 :
        return 1
    return 2