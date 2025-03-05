const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(Number(input[0])));
});

const solution = (num) => {
  let chocolate = 1;
  let answer = "";
  while (chocolate < num) {
    chocolate *= 2;
  }

  let n = 0;
  answer = `${chocolate}`;
  while (true) {
    if (num % chocolate === 0) {
      return (answer += ` ${n}`);
    }
    chocolate /= 2;
    n += 1;
  }
};
