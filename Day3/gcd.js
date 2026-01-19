const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st num ", function (n1) {
  rl.question("Enter 2nd number  ", function (n2) {
    
    // Approach 1
     let gcd = 1;
     const lower = n1 >n2 ? n2 : n1;

    // for (let i = 1; i <= lower; i++) {
    //     if(n1%i === 0 && n2%i === 0){
    //         gcd = i;
    //     }
    // }

    // Approach 2

    for(let i = lower ; i>=1 ; i--){
        if(n1%i===0 && n2%i===0){
            gcd = i ;
            // console.log("GCD : ", gcd );
            return
        }
    }
    console.log("GCD : ", gcd );
    rl.close();
  });

  
});
