function solution(A,B){
    const answerA = A.sort((a,b)=>a-b)
    const answerB = B.sort((a,b)=>b-a)
    return answerA.map((item,idx)=>item*answerB[idx]).reduce((sum,cur)=>sum+cur,0)
  
}