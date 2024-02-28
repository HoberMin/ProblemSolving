const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(input[0], input[1]));
});

const solution = (S, P) => {
  let index = 0;
  let count = 0;
  while (index !== P.length) {
    let nowString = P[index];
    while (true) {
      if (S.indexOf((nowString += P[index + 1])) > -1) {
        index += 1;
      } else {
        break;
      }
    }
    index += 1;
    count += 1;
  }
  return count;
};
