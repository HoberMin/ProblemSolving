function solution(n, edge) {
    const graph = Array.from({length:n+1}).map(()=> [])
    const visited = Array.from({length:n+1}).fill(0)
    
    edge.forEach(e => {
        const [from, to] = e
        graph[from].push(to)
        graph[to].push(from)
    })
    
    
    const distance = {}
    const queue = [1]
    
    let max = 0
    
    visited[1] = 1
    distance[1] = 1
    
    while(queue.length){
        const current = queue.shift()
        
        graph[current].forEach(e => {
            if (visited[e] === 0){
                visited[e] = 1
                queue.push(e)
                distance[e] = distance[current] + 1
                max = Math.max(distance[e], max)
            }
        })
    }
    
    return Object.values(distance).filter(i => i===max).length
    
    
    
}