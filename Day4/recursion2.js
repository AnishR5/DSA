const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function recursiveFun (n, name){
    console.log(name," ", n);

    if(n===1) return

    recursiveFun(n-1, name)
}

rl.question("Enter Name ", function (name) {
  rl.question("Enter number  ", function (n) {
    recursiveFun(n, name)
    rl.close();
  });

  
});
