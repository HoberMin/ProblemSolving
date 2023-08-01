function solution(N, stages) {
    const dic = []
    for(let i = 1; i<= N; i++){
        const arrivalStages = stages.filter(element => element >= i).length
        const failure = stages.filter(element => element === i ).length
        dic.push([i, failure/arrivalStages])
    }
    dic.sort((a,b) =>b[1]-a[1])
    
    const answer = []
    dic.forEach(item => answer.push(item[0]))
    return answer
}