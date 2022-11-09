function solution(x) {
    const sum = (x+"").split("").reduce((sum,cur) => sum+parseInt(cur),0)
    
    return x%sum===0 ? true : false
}