const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    let dup = Number(num);
    let digits = 0;

    while(dup >0){
        digits++
        dup = Math.floor(dup/10);
    }


    let dup2 = Number(num);
    let sum =0;

    while(dup2>0){
        let rem = dup2%10; 
        sum += Math.pow(rem,digits);
        dup2 = Math.floor(dup2/10);
    }
    console.log("Sum:",sum);

    if(sum === Number(num)){
        console.log("Is an Armstong num");
    }else{
        console.log("Not a Armstrong num ");
    }

  rl.close();
});
