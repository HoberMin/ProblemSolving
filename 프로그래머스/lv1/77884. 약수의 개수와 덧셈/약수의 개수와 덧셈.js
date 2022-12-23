function solution(left, right) {
    let answer = 0
    for(i=left; i<=right; i++){
        if(Math.sqrt(i)===parseInt(Math.sqrt(i))) {
            answer -= i
            continue;
        }
        answer += i
    }
    return answer
}