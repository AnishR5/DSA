const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    num=Number(num);

    const printNTimes = (n) =>{
        if(n===0){
            return
        }
        
        printNTimes(n-1);
        console.log("Print: ",n);
    }

    printNTimes(num)
  rl.close();
});
