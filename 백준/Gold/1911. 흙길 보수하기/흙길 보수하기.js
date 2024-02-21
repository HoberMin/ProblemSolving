const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(solution(input));
});

const solution = (input) => {
  const [널빤지정보, ...웅덩이정보] = input;
  const [_, 널빤지길이] = 널빤지정보.split(" ").map(Number);
  const 번호순웅덩이 = 웅덩이정보
    .map((웅덩이) => 웅덩이.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  let 현재위치 = 0,
    널빤지합 = 0;

  for (const [시작위치, 끝위치] of 번호순웅덩이) {
    if (현재위치 >= 끝위치) continue;
    현재위치 = Math.max(현재위치, 시작위치);
    널빤지합 += Math.ceil((끝위치 - 현재위치) / 널빤지길이);
    현재위치 += Math.ceil((끝위치 - 현재위치) / 널빤지길이) * 널빤지길이;
  }

  return 널빤지합;
};
