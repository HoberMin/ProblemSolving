const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(input.map(Number)));
});

const solution = (num) => {
  const [_, ...k] = num;
  k.sort((a, b) => a - b);
  return k.reduce((acc, cur, idx) => acc + Math.abs(cur - (idx + 1)), 0);
};
