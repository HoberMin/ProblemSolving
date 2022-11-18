function solution(s){
    let i=0;
    let RightCount=0;
    let LeftCount=0;
    const answer = s.split("")
    
    while(i<s.length){
        answer[i] === "("? LeftCount+=1 : RightCount +=1
        if(RightCount>LeftCount){
            return false
        }
        i++
    }
    return RightCount!==LeftCount?false:true
}