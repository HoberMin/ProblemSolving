function solution(X, Y) {
    const checkNum = [0,1,2,3,4,5,6,7,8,9]
    const filterNum =  checkNum.filter(e => X.includes(e+"") && Y.includes(e+""))
    
    if (filterNum.length === 0) return "-1"
    
    let answer = ""
    
    filterNum.forEach((e) =>{
        const xCount = X.split("").filter((item) => e=== +item).length
        const yCount = Y.split("").filter((item) => e=== +item).length
        const counting = Math.min(xCount,yCount)
        answer += (e+"").repeat(counting)
    })
    
    if (filterNum.filter(e => e!==0).length === 0) return "0"
    
    return answer.split("").sort((a,b)=>b-a).join("")
}