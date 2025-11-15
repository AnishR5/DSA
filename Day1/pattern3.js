const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {
    for(let i=1;i<=rows;i++){
        let row='';
        for(let j=1;j<=i;j++){
            row+=j;
        }
        console.log(row);
    }
  rl.close();
});
