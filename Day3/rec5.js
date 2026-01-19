const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    num = Number(num);

    const factorial = (n,fact=1) =>{
        if(n<1){
            console.log("Factorial : ", fact);
            return
        }

        factorial(n-1, fact*n)
    }

    factorial(num)

  rl.close();
});
