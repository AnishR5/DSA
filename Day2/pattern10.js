const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number of rows: ", function (rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    let start = i % 2 === 0 ? 0 : 1; 

    for (let j = 0; j < i; j++) {
      row += (start + j) % 2;
    }

    console.log(row);
  }

  rl.close();
});
