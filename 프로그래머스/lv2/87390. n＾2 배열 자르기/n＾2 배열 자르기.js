function solution(n, left, right) {
    const answer = []
    for(let i=left; i<=right; i++ ){
        answer.push(Math.max(i%n , parseInt(i/n)) + 1)
    }
    return answer
}






// 1 2 3 
// 2 2 3
// 3 3 3

//2차원 배열의 인덱스 값중 큰값에서 + 1 하면 요소가 된다.

//aborted오류가 나는 이유는 배열의 초기화 작업 중에서 발생되는 오류것같다.

//크기가 너무 커서 중간에 해당하는 부분만큼만 구해야되는것 같다.