const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(input[1].split(" ").map(Number)));
});

const solution = (num) => {
  const maxValue = Math.max(...num);
  return num.reduce((acc, cur) => acc + cur + maxValue, 0) - maxValue * 2;
};
