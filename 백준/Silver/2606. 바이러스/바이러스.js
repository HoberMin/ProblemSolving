const [temp1, temp2, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
let node = Number(temp1);
let edge_num = Number(temp2);
let graph = [...new Array(node + 1)].map(() => []);
let visited = [...new Array(node + 1)].fill(0);
let answer = 0;
// 그래프 생성
for (let i = 0; i < edge_num; i++) {
  const [start, end] = arr[i].split(' ');
  graph[start].push(end);
  graph[end].push(start);
}

visited[1] = 1;

function dfs(start) {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      answer++;
      dfs(end);
    }
  }
}
dfs(1);

console.log(answer);

// const dfs = (start) => {
//   for (let end of graph[start]) {
//     if (visited[end] === 0) {
//       console.log(end);
//       visited[end] = 1;
//       answer += 1;
//       dfs(end);
//     }
//   }
// };
