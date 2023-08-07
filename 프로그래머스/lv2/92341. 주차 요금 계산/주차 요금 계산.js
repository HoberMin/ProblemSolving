function solution(fees, records) {
    const dic = {}
    const answer = []
    records.forEach(e => {
        const [time,carNum,inOut] = e.split(" ")
        const [hour, minute] = time.split(":")
        let newTime = +hour * 60 + +minute
        
        if (inOut === "IN") newTime = -newTime
        
        if(dic[carNum]) dic[carNum] += newTime
        else dic[carNum] = newTime
    })
    // 입차시간은 -로 출차시간은 + 로 작성하며 분단위로 변경하여 차량번호 : 주차시간
    
    for(const a in dic){
        const carNum = a
        let carFee = dic[a]
        if (carFee <=0) carFee += 1439
        
        answer.push([carNum, carFee])
    }
    // 정렬하기 위해 2차원배열로 변경 => [차량번호, 청구요금]\
    
    answer.sort((a,b) => a[0]-b[0])
    //차량번호정렬
    
    return answer.map(e => {
        const answerFee = e[1]
        if (answerFee <= fees[0]) return fees[1]
        else{
            return Math.ceil((answerFee-fees[0])/fees[2]) * fees[3] + fees[1]
        }
        
    })
    
    
}