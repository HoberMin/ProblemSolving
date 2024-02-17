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

const solution = (str1) => {
  const str2 = str1.split("-");
  const result = [];
  str2.forEach((e) => {
    result.push(
      e
        .split("+")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0)
    );
  });
  return result.reduce((acc, cur) => acc - cur, result[0] * 2);
};
