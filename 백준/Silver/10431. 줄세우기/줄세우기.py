input_data = int(input())

for _ in range(input_data):
    data = list(map(int,input().split(" ")))
    size = data[2:]
    counting = 0
    tall_max = [data[1]]
    
    for i in range(len(size)):
        
        if max(tall_max) < size[i]:
            tall_max.append(size[i])
        
        elif min(tall_max) > size[i]:
            counting += len(tall_max)
            tall_max = [size[i]] + tall_max

        else:
            j = 0
            while True:
                if tall_max[j] > size[i]:
                    counting += len(tall_max)-(j)
                    tall_max = tall_max[:j] + [size[i]] + tall_max[j:]
                    break
                else:
                    j+=1
                       
    print(f"{data[0]} {counting}")