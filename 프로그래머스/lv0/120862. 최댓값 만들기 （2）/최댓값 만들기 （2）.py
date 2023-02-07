def solution(numbers):
    if len(numbers) == 2:
        return numbers[0]*numbers[1]
    positive = [0,0]
    negative = [0,0]
    for i in numbers:
        if(i>0):
            positive.append(i)
        else:
            negative.append(i)
    positive.sort()
    negative.sort(reverse=True)    
    return max(positive[-1]*positive[-2],negative[-1]*negative[-2])
            