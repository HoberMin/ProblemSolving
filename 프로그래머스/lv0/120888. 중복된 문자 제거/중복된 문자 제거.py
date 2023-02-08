def solution(my_string):
    new_string = ""
    
    for i in my_string:
        if(i not in new_string):
            new_string += i
    return new_string