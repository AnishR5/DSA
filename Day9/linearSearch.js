const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findIndex = (arr, num) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log("Index", i);
      return;
    }
  }

  console.log("Index", index);
};

rl.question("Enter number  ", function (num) {
    num = Number(num)
  findIndex([1, 2, 3, 4, 5], num);
  rl.close();
});
