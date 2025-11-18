const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printNNum (target, n=1){
    console.log(n);
    if(n===target) {
        return
    }

    printNNum(target, n+1);
}

rl.question("Enter number  ", function(num) {

    num = Number(num)
    printNNum(num);

  rl.close();
});
