const platform = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const fs = require('fs');
const [suggestCase, ...arr] = fs
  .readFileSync(platform)
  .toString()
  .trim()
  .split('\n');

const [node, _, start] = suggestCase.split(' ').map(Number);

const graph = Array.from({ length: node + 1 }).map(() => []);
const visited = Array.from({ length: node + 1 }).fill(false);

arr.forEach((e) => {
  const [first, end] = e.split(' ').map(Number);
  graph[first].push(end);
  graph[end].push(first);
 });

const graph1 = graph.map((e) => e.sort((a, b) => a - b));

const answer = [start];
visited[start] = true;

function dfs(startNode) {
  for (const end of graph1[startNode]) {
    if (!visited[end]) {
      visited[end] = true;
      answer.push(end);
      dfs(end);
    }
  }
}

function bfs(graph, startNode) {
  let bfsVisited = [];
  let needVisited = [];

  needVisited.push(startNode);

  while (needVisited.length !== 0) {
    const node = needVisited.shift(); // 1반환
    if (!bfsVisited.includes(node)) {
      bfsVisited.push(node);
      needVisited = [...needVisited, ...graph[node]];
    }
  }

  return bfsVisited;
}

dfs(start);

console.log(answer.join(' '));
console.log(bfs(graph1, start).join(' '));
