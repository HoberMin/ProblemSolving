const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  //   const N = Number(input[0]);
  //   const numbers = input[1].split(" ").map(Number);
  const str1 = input[0];
  const str2 = input[1];

  console.log(solution(str1, str2));
});

const solution = (str1, str2) => {
  const answer = str1.replaceAll(str2, "1");
  return answer.split("").filter((e) => e === "1").length;
};
