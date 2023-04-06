def solution(brown, yellow):
    for height in range(1,yellow+1):
        if (height+2)*(yellow/height+2) == sum([brown,yellow]):
            return [yellow//height+2,height+2]

#height = yellow_height
#브라운세로 = yellow_height +2
#브라운가로 = yellow // yellow_height + 2