function solution(s) {
    const arr = s.split(" ").map(item => +item).sort((a,b)=>a-b)
    return `${arr[0]} ${arr[arr.length-1]}`
}