function solution(n) {
    const divisorArr = divisor(n)
    return divisorArr.reduce((acc,cur)=>acc+cur,0)
}

function divisor(n){
    i=1
    div = []
    for(i=1; i<=n; i++){
        if(n%i===0){
            div.push(i)
        }
    }
    return div
}