function solution(x) {
    const answer = (x+"").split("")
    const sum = answer.reduce((sum,cur) => sum+parseInt(cur),0)
    
    return x%sum===0 ? true : false
}