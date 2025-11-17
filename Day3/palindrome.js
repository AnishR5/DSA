const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    //let revNum = 0;
    let sign = num>0? 1 : -1; 
    let number = Math.abs(Number(num));

    // while(number>=1){
    //     revNum = revNum*10 + number%10;
    //     number = Math.floor(number/10);
    // }

    let revNum = Number(
        Math.abs(num).toString().split("").reverse().join("")
    )

    revNum *= sign;

    console.log(revNum === Number(num));

  rl.close();
});
