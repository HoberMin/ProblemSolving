function solution(n, words) {
    const stack = [words[0]]
    const answer = []
    for(let i=1; i<words.length; i++){
        
        if(stack.includes(words[i])) return answer.concat([i%n+1,parseInt(i/n)+1])
        
        stack.push(words[i])
        
        let collectFirstWord = stack.slice(-2,-1)+""
        
        
        if(collectFirstWord.slice(-1) !== words[i][0]) return answer.concat([i%n+1,parseInt(i/n)+1])
        
    }
    return answer.length ? answer : [0,0]
}