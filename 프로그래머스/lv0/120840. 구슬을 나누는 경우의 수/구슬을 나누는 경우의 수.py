import math

def solution(balls, share):
    ball = math.factorial(balls)
    sharing = math.factorial(share)
    division = math.factorial (balls-share)
    
    return ball/(sharing*division)