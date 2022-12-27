function solution(n) {
    return [...n.toString(3)].reduce((a,c,i)=>+a+c*Math.pow(3,i),0)
}