const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a Number: ", function(number) {

    // Approach 1
    // let revnum = 0;
    // let num = Math.abs(Number(number));

    // while(num>=1){
    //     let rem = num%10;
    //     revnum = revnum*10 + rem ;
    //     num = Math.floor(num/10);
    // }

    //Approach 2 (fastest)
    let revnum = Number(
        Math.abs(number).toString().split("").reverse().join("")
    )

    console.log(revnum);

  rl.close();
});
