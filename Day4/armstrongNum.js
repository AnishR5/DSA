const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Number ", function(num) {

    let sum=0;
    let digits = Math.abs(Number(num)).toString().length;
    let orgNum = Number(num);

    while(orgNum>=1){
        let rem = orgNum%10;
        sum+= Math.pow(rem,digits);
        orgNum=Math.floor(orgNum/10);
    }

    if(Number(num) === sum){
        console.log("Armstrong Num");
    }else{
        console.log("Not an Armstrong No");
    }

  rl.close();
});
