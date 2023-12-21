const isOneDifference = (from, to) => {
    const fromArray = from.split("")
    const toArray = to.split("")
    return fromArray.filter((e,i) => e !== toArray[i]).length === 1 ? true : false
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0
    
    const visited = {[begin] : 0}
    const queue = [begin]
    
    while(queue.length > 0){
        const current = queue.shift()
        
        if (current === target) break
        
        for (const word of words){
            if (isOneDifference(current, word) && !visited[word]){

                visited[word] = visited[current] + 1
                queue.push(word)
            }
        }
    }
    return visited[target] ? visited[target] : 0
    
}