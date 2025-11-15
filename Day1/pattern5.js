const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {

    // for(let i=0;i<rows;i++){
    //     let row='';
    //     for(let j=0;j<rows-i;j++){
    //         row+='*';
    //     }
    //     console.log(row);
    // }

    for(let i=rows;i>0;i--){
        let row='';
        for(let j=0;j<i;j++){
            row+='*';
        }
        console.log(row);
    }
  rl.close();
});
