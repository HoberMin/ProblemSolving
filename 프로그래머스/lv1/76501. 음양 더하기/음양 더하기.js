function solution(absolutes, signs) {
    const answer = []
    signs.forEach((item,idx)=>{
        item ? answer.push(absolutes[idx]): answer.push(-absolutes[idx])
    })
    return answer.reduce((sum,cur)=>sum+cur,0)
}