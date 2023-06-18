import math
def solution(fees, records):
    basic_time , basic_fee , unit_time , unit_fee = fees
    
    time_dic = {}
    car_list = []
    
    for i in records:
        time, num , inout = i.split(" ")
        
        if num not in car_list:
            car_list.append(num)
        
        if num not in time_dic:
            time_dic[num] = [time]
            
        else:
            time_dic[num].append(time)
    
    car_fee = []
    
    for j in time_dic.items():
        car_num , in_out_time = j
        if len(in_out_time)%2:
            in_out_time.append("23:59")
        fee = 0
        out_time,in_time = 0,0
        for q in range(1,len(in_out_time),2):
            out_time += 60*int(in_out_time[q][:2]) + int(in_out_time[q][3:])
            in_time += 60*int(in_out_time[q-1][:2]) + int(in_out_time[q-1][3:])
            fee += out_time - in_time
            out_time,in_time = 0,0
        
        car_fee.append([car_num,fee])
    
    car_fee.sort(key = lambda x: x[0])
    answer = []
    total_fee = 0

    for i in car_fee:
        if i[1]<= basic_time:
            answer.append(basic_fee)
        else:
            total_fee += basic_fee
            i[1] -= basic_time
            total_fee += math.ceil(i[1]/unit_time) * unit_fee
            answer.append(total_fee)
            total_fee = 0
    return answer