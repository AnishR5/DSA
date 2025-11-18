const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial (target, n=1, fact =1){
    fact*=n;
    if(n === target){
        console.log("Factorial : ", fact);
        return
    }

    factorial(target, n+1, fact);
}

rl.question("Enter number  ", function(num) {
    num = Number(num);

    factorial(num);
  rl.close();
});
