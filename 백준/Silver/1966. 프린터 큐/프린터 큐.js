const platform = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync(platform)
  .toString()
  .split('\n')
  .map((e) => e.trim());

for (let i = 0; i <= n * 2 - 1; i += 2) {
  const [N, M] = input[i].split(' ');
  const arr = input[i + 1].split(' ');
  const maxSortArray = [...arr].sort((a, b) => a - b);
  let max = maxSortArray.pop();
  let front = 0;
  let count = 0;
  const result = [];
  while (true) {
    if (arr[front] === max) {
      count += 1;
      max = maxSortArray.pop();
      if (front === +M) {
        result.push(count);
        break;
      }
    }
    front += 1;
    front = front === +N ? 0 : front;
  }
  console.log(result.join('\n'));
}
