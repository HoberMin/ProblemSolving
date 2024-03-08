const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [temp, ...graph] = input;
  const [N, M] = temp.split(" ");
  console.log(solution(+N, +M, graph));
});

const solution = (N, M, graph) => {
  const visited = Array.from({ length: N }, () => Array(M).fill(0));
  const graphLine = graph.map((e) => e.split("").map(Number));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [[0, 0]];
  visited[0][0] = 1;
  while (queue.length !== 0) {
    const [row, col] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = row + dx[i];
      const ny = col + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (graphLine[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = visited[row][col] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return visited[N - 1][M - 1];
};
