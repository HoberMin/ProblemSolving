function solution(number) {
    const answer = []
    for(i=0; i<number.length-2; i++){
        for(j=i+1; j<number.length-1; j++){
            for(p=j+1; p<number.length; p++){
                answer.push([number[i],number[j],number[p]])
            }
        }
    }
    return answer.filter(item=>item.reduce((a,c)=>a+c,0)===0).length
}