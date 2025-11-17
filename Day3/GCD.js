const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st num ", function (n1) {
  rl.question("Enter 2nd number  ", function (n2) {
    n1 = Number(n1);
    n2 = Number(n2);

    let minNum = Math.min(n1,n2);

    let gcd = 1;

    for(let i = minNum ; i>1 ;i--){
        if(n1%i === 0 && n2%i === 0){
            gcd = i;
            console.log("GCD : ", i);
             rl.close();
             return
        }
    }
    
    console.log("GCD", gcd);

      rl.close();

  });

});
