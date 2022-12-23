function solution(answers) {
    const people1 = [1,2,3,4,5]
    const people2 = [2,1,2,3,2,4,2,5]
    const people3 = [3,3,1,1,2,2,4,4,5,5]
    const answer = []
    const people1Collect = answers.filter((a,i)=>a===people1[i%people1.length]).length
    const people2Collect = answers.filter((a,i)=>a===people2[i%people2.length]).length
    const people3Collect = answers.filter((a,i)=>a===people3[i%people3.length]).length
    const max = Math.max(people1Collect,people2Collect,people3Collect)
    if(people1Collect === max) {answer.push(1)}
    if(people2Collect === max) {answer.push(2)}
    if(people3Collect === max) {answer.push(3)}
    
    return answer;
}