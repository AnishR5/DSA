const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printNto1 (start){

    console.log(start);

    if(start === 1) return;

    printNto1(start -1);

}

rl.question("Enter number  ", function(num) {

    num = Number(num);

    printNto1(num)
  rl.close();
});
