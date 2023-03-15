def solution(s):
    number = ["zero","one","two","three",'four','five',"six","seven","eight","nine"]
    for idx,item in enumerate(number):
        if item in s:
            s = s.replace(item,str(idx))
    return eval(s)