function solution(array, commands) {
    const answer = commands.map(v=>
        array.slice(v[0]-1,v[1]).sort((a,b)=>a-b)[v[2]-1])
    return answer
}