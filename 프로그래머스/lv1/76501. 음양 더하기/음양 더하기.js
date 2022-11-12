function solution(absolutes, signs) {

    return absolutes.reduce((sum,cur,i)=>signs[i] ? sum+cur : sum+cur*-1 ,0)
}