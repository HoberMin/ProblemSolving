const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const num = input[0];
  console.log(solution(num));
});

const solution = (num) => {
  const numberArray = num.split("").map(Number);
  const isZero = numberArray.some((e) => e === 0);
  const sumArray = numberArray.reduce((acc, cur) => acc + cur, 0);
  return isZero && sumArray % 3 === 0
    ? numberArray.sort((a, b) => b - a).join("")
    : -1;
};
