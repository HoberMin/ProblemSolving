function solution(numbers) {
    let arr = numbers
    .sort((a,b)=>(a.toString()+b.toString())-(b.toString()+a.toString()))
    .reverse()
    
    return arr[0]===0? '0' : arr.join("")
}