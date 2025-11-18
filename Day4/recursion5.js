const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfN (target, n=0, sum=0){

    sum+=n;

    if(n === target){
        console.log("Sum = ", sum );
        return
    }

    sumOfN(target,n+1, sum);

}
rl.question("Enter number  ", function(num) {

    num = Number(num);
    sumOfN(num)
  rl.close();
});
