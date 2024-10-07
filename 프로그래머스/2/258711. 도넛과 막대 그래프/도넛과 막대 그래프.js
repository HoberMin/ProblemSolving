function solution(edges) {
    const map = new Map()
    
    edges.forEach(e => {
        
        const [from, to] = e
        
        if (!map.has(from)) {
            map.set(from , [1 , 0])
        }else {
            map.set(from , [map.get(from)[0] + 1, map.get(from)[1]])
        }
        
        if (!map.has(to)) {
            map.set(to , [0 , 1])
        }else {
            map.set(to , [map.get(to)[0], map.get(to)[1] + 1])
        }
        
    })
    
    const answer = [0,0,0,0]
    

    
    for (const [key, value] of map) {
        const [from, to] = value
        
        if (from >= 2 && to === 0) {
            answer[0] = key
        }
        
        if (from >=2 && to >= 2) {
            answer[3] += 1
        }
        
        if (from === 0) {
            answer[2] += 1
        }
    }
    
    answer[1] = map.get(answer[0])[0] - answer[2] - answer[3]
    
    
    return answer
    
}