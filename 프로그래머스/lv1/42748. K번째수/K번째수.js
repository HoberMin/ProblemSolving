function solution(array, commands) {
    const answer = commands.map(v=>{
        const [i,j,k] = v
        return array.slice(i-1,j).sort((a,b)=>a-b)[k-1]
    })
    return answer
}