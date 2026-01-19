const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    const printNNums = (n) =>{
        if(n === 0){
            return
        }

        printNNums(n-1);
        console.log(n);
    }

    printNNums(num)
  rl.close();
});
