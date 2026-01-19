const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    num=Number(num)

    function sumOfNNum(n, sum=0) {

        if(n<1){
            console.log("Sum : ", sum);
            return
        }

        sumOfNNum(n-1, sum+n)

    }

    sumOfNNum(num)
  rl.close();
});
