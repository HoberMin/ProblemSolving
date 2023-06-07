from collections import Counter
import math
def solution(a, b, c, d):
    cube = sorted(Counter([a,b,c,d]).items(),key=lambda x:-x[1])
    if cube[0][1] == 4:
        return int(str(cube[0][0])*4)
    elif cube[0][1]==3:
        return (10*cube[0][0]+cube[1][0])**2
    elif cube[0][1]==2 and cube[1][1]==2:
        return (cube[0][0]+cube[1][0])*abs(cube[0][0]-cube[1][0])
    elif cube[0][1]==2:
        return cube[1][0]*cube[2][0]
    else:
        return min([cube[0][0],cube[1][0],cube[2][0],cube[3][0]])
    # return answer