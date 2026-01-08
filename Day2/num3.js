const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {

    num = Math.abs(Number(num));

    let temp = num;
    let rev = 0 ; 

    while(temp > 0){
        let rem = temp % 10 ; 
        rev = rev*10 +rem;
        temp = Math.floor(temp/10);
    }

    console.log(rev === num) ; 

  rl.close();
});


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false; 
    const MAX = (Math.pow(2,31) - 1);
    const MIN = -(Math.pow(2,31));

    x = Number(x);
    let temp = x;
    let rev = 0;

    while(temp > 0){
        let rem = temp % 10;
        rev = rev*10 + rem ;
        temp = Math.floor(temp/10);
    }

    if(rev<MIN || rev > MAX){
        return false;
    }else{ 
        return rev === x;
    }
};