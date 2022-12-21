function solution(array, commands) {
    const commandsLength = commands.length
    let answer = []
    let n = 0
    while(n<commands.length){
        let i = commands[n][0]
        let j = commands[n][1]
        let k = commands[n][2]
        let arr = array.slice(i-1,j)
        answer.push(arr.sort((a,b)=>a-b)[k-1])
        n++
    }
    return answer;
}