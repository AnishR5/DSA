const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    num= Number(num);
    for(let i =2; i<=num/2 ; i++){
        if(num %i === 0){
            console.log("Not a prime");
            break
        }
    }

    console.log("Prime num");
  rl.close();
});
