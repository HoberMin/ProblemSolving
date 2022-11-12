function solution(arr, divisor) {
    return arr.filter(item=>item%divisor===0)[0] ? arr.filter(item=>item%divisor===0).sort((a,b)=>a-b) : [-1]
    
}