const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [num, ...inputs] = input;
  console.log(solution(inputs.map(Number)));
});

const solution = (arr) => {
  let zero = 0;
  let first = 0;
  let second = 0;

  arr.forEach((e) => {
    // 각 번호일 때
    const tempZero = zero;
    const tempFirst = first;
    const tempSecond = second;

    zero = Math.max(tempFirst + 0, tempSecond + 0);
    first = Math.max(tempFirst, tempZero + e);
    second = Math.max(tempSecond, tempFirst + e);
  });

  return Math.max(...[zero, first, second]);
};
