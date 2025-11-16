const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {

    for(let i=1; i<=rows;i++){
        let row = '';
        for(let x =1;x<=rows-i;x++){
            row+=' ';
        }

        for(let y =1 ; y<=i*2-1;y++){
            row+='*'
        }

        console.log(row);
    }
    
  rl.close();
});
