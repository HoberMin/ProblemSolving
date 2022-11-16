function solution(s) {
    const answer = s.split(" ").map(v=>+v)
    console.log(answer)
    return Math.min(...answer)+" "+Math.max(...answer)

}