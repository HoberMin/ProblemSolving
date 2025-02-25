class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  push(value) {
    this.queue[this.rear++] = value;
  }
  pop() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(input[0]));
});

const solution = (input) => {
  const [start, end] = input.split(" ").map(Number);
  const visited = Array.from({ length: 100001 }).fill(0);
  const queue = new Queue();
  visited[start] = 1;
  queue.push([start, 0]);

  while (queue.size() > 0) {
    const [current, count] = queue.pop();
    if (current === end) return count;

    for (let next of [current - 1, current + 1, current * 2]) {
      if (visited[next] === 0 && next >= 0 && next <= 100000) {
        visited[next] = 1;
        queue.push([next, count + 1]);
      }
    }
  }
};
