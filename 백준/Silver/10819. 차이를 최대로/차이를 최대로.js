const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  console.log(solution(input[1].split(' ').map(Number)));
});

const solution = (inputs) => {
  let max = 0;

  const calculateMax = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      temp += Math.abs(inputs[arr[i]] - inputs[arr[i + 1]]);
    }
    return temp;
  };

  const permutation = (item) => {
    if (item.length === inputs.length) {
      max = Math.max(calculateMax(item), max);
    }

    for (let i = 0; i < inputs.length; i++) {
      if (!item.includes(i)) {
        permutation([...item, i]);
      }
    }
  };

  permutation([]);
  return max;
};
