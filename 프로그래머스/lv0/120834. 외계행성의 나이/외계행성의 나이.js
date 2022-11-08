function solution(age) {
    const ageArr =(age+"").split("")
    const answer = ageArr.map((item)=>"abcdefghij"[+item])
    return answer.join("")
}