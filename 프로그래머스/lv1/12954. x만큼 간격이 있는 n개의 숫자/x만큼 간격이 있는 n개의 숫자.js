function solution(x, n) {
    const arr = []
    let answer = 0
    for(let i=1; i<=n; i++){
        answer += x
        arr.push(answer)
    }
    return arr;
}