function solution(x, n) {
    return Array(n).fill(x).map((item,idx)=>(idx+1)*item)
}