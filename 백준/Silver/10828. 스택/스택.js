const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const stack = [];

const result = [];

rl.on('line', function (line) {
  input.push(line);
  if (input.length > 1) {
    const [command, x] = line.trim().split(' ');
    if (command === 'push') stack.push(x);
    else if (command === 'pop') {
      stack.length ? result.push(+stack.pop()) : result.push(-1);
    } else if (command === 'size') {
      result.push(stack.length);
    } else if (command === 'empty') {
      stack.length ? result.push(0) : result.push(1);
    } else if (command === 'top') {
      stack.length ? result.push(stack[stack.length - 1]) : result.push(-1);
    } else {
      console.error('non command');
    }
  }

  if (+input[0] === input.length - 1) {
    console.log(result.join('\n'));
    rl.close();
  }
}).on('close', function () {
  process.exit(); // 프로세스 종료
});
