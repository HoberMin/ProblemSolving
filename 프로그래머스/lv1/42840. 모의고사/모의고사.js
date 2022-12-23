function solution(answers) {
    const rule1 = [1,2,3,4,5]
    const rule2 = [2,1,2,3,2,4,2,5]
    const rule3 = [3,3,1,1,2,2,4,4,5,5]
    const peopleAnswer1 = answerMake(rule1 , answers.length)
    const peopleAnswer2 = answerMake(rule2 , answers.length)
    const peopleAnswer3 = answerMake(rule3 , answers.length)
    return collectAnswer(answers,peopleAnswer1,peopleAnswer2,peopleAnswer3)
}

function collectAnswer(answers,people1,people2,people3){
    const people1Collect = answers.filter((item,idx)=>item===people1[idx]).length
    const people2Collect = answers.filter((item,idx)=>item===people2[idx]).length
    const people3Collect = answers.filter((item,idx)=>item===people3[idx]).length
    const arr = [people1Collect,people2Collect,people3Collect]
    const answer = []
    arr.forEach((item,idx)=>{
        if(Math.max(...arr)===item) answer.push(idx+1)})
    return answer
    
    
}

function answerMake(rule,length){
    let peopleAnswer = []
    let idx = 0;
    let cnt = 0;
    while(cnt<length){
        peopleAnswer.push(rule[idx])
        idx++
        cnt++
        idx===rule.length ? idx = 0 : idx = idx
    }
    return peopleAnswer
}
