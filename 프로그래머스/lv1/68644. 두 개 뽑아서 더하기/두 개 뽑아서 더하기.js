function solution(numbers) {
    const newArr = numbers;
    const answer = []
    newArr.forEach((i,newIdx)=>{
        numbers.forEach((j,numIdx)=>{
            
            if(!answer.includes(i+j)&&newIdx!==numIdx){
                answer.push(i+j)
            }
        })
    })
    return answer.sort((a,b)=>a-b)
}