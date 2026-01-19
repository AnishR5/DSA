const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    num = Number(num);

    function printNTo1 (n) {

        if(n<1){
            return
        }

        console.log(n);
        printNTo1(n-1)
    }

    printNTo1(num)
  rl.close();
});
