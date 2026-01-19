const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {
num=Number(num)
    let divisors = [];

    for(let i=1; i<=num/2; i++){
        if(num%i===0){
            divisors.push(i)
        }
    }
    divisors.push(num);

    console.log("Divisors of ",num," are: ",divisors.join(","));
  rl.close();
});
