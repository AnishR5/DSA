const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    for(let i=num;i>0;i--){
        let str="";
        for(let j=1;j<=num-i;j++){
            str+=" ";
        }
        for(let k=1;k<=(2*i-1);k++){
            str+='*';
        }
        console.log(str);
    }
  rl.close();
});
