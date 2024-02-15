const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const numbers = [...input].map(Number);
  console.log(solution(numbers));
});

const solution = (num) => {
  const makeKg = [];
  const [N, ...k] = num;
  k.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    makeKg.push(i * k[N - i]);
  }
  return Math.max(...makeKg);
};
