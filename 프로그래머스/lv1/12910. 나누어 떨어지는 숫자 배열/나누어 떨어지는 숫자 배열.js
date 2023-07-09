function solution(arr, divisor) {
    const answer = arr.filter(item=>{
      if (item%divisor===0) return item  
    })
    return answer.length===0 ? [-1] : answer.sort((a,b)=>a-b)
}