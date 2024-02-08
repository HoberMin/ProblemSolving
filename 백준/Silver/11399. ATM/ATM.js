const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);

  console.log(solution(N, numbers));
});

const solution = (N, numbers) => {
  numbers.sort((a, b) => a - b);
  const answer = numbers.reduce((acc, cur, idx) => {
    return acc + cur * (N - idx);
  }, 0);
  console.log(answer);
  process.exit();
};
