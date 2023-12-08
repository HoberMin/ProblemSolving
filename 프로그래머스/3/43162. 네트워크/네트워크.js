function solution(n, computers) {
   const visited = new Array(n).fill(0)
   
   const graph = computers.map((end,idx) => {
       return end.map((i,index) => {
           if (i) return index
           return ""
       }).filter(e => e !== "" && idx !== e)
   })
   
   let answer = 0
   
   
   function dfs(start){
       for (const end of graph[start]){
           if (visited[end] !== 1){
               visited[end] = 1
               dfs(end)
           }
       }
   }
   
   for (let i=0; i<n; i++){
        if (visited[i] !== 1){
            visited[i] = 1
            dfs(i)
            answer += 1
        }
   }
    
    return answer

}