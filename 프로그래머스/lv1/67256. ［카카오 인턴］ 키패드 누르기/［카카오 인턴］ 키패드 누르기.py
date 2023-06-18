def left_distance(num, target):
    if abs(target-num)%3 == 0:
        return abs(target-num) // 3
    
    if num+1 == target:
        return 1
    
    elif num+1 < target:
        return (target - (num+1)) // 3 + 1
    
    elif num +1 > target:
        return (num+1-target)//3 + 1

def right_distance(num,target):
    if abs(target-num)%3 == 0:
        return abs(target-num) // 3
    
    if num-1 == target:
        return 1
    
    elif num-1 < target:
        return (target - (num-1)) // 3 + 1
    
    elif num -1 > target:
        return (num-1 - target) //3 + 1

def solution(numbers, hand):
    answer = ""
    left_stack = [10]
    right_stack = [12]
    
    for i in numbers:
        if i in [1,4,7]:
            answer += "L"
            left_stack.append(i)
        
        elif i in [3,6,9]:
            answer += 'R'
            right_stack.append(i)
        
        else:
            if i == 0:
                i = 11
            right , left = right_distance(right_stack[-1],i) , left_distance(left_stack[-1],i)
            
            if right > left:
                answer += "L"
                left_stack.append(i)
                
            elif right<left:
                answer+="R"
                right_stack.append(i)
            else:
                if hand == "right":
                    answer += "R"
                    right_stack.append(i)
                else:
                    answer += "L"
                    left_stack.append(i)
    return answer
        


                    
            