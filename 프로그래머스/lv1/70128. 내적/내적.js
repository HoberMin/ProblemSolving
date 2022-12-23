function solution(a, b) {
    return a.map((item,idx)=>item*b[idx]).reduce((a,c)=>a+c,0)
}