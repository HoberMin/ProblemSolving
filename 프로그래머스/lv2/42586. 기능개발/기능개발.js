function solution(progresses, speeds) {
    const remaine = []
    progresses.forEach((item,idx) => {
        remaine.push(Math.ceil((100-item)/speeds[idx]))
    })
    const answer = []
    let stack = [remaine[0]]
    for(i=1; i<=remaine.length-1; i++){
        const a = remaine[i]
        const temp = Math.max(...stack)
        if (temp < a){ //배포
            answer.push(stack.length)
            stack = [a]
        }else{
            stack.push(a)
        }
    }
    answer.push(stack.length)
    return answer
}

// 1. temp의 max보다 내가 크면 temp의 길이만큼 push