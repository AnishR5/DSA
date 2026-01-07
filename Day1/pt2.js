const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    for(let i = 0 ; i<num; i++) {
        let str = "";
        for(let j=0 ; j<=i ;j++){
            str+="*"
        }
        console.log(str);
    }
  rl.close();
});
