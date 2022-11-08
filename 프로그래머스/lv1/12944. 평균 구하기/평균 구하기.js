function solution(arr) {
    const sum = arr.reduce((sum,cur)=> sum+cur)
    const answer = sum/arr.length
    return answer;
}