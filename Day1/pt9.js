const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    // for (let i = 1; i <= num; i++) {
    //   let str = "";
    //   if (i % 2 === 0) {
    //     for (let j = 0; j <= i; j++) {
    //       str += j % 2;
    //     }
    //   } else {
    //     for(let j=1;j<=i;j++){
    //         str+=j%2;
    //     }
    //   }

    //   console.log(str);
    // }
    for (let i = 1; i <= num; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += j % 2;
        }
        console.log(str);
    }
  rl.close();
});
