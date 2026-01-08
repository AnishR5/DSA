const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function (num) {
  num = Number(num);

  let digits = 0;
  while (num > 1) {
    num = Math.ceil(num / 10);
    digits++;
  }
  console.log("number of digits: ", digits);
  rl.close();
});
