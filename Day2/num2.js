const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number  ", function(num) {
    num = Number(num);

    let rev = 0;

    while(num > 0){
        let rem = num % 10 ;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    console.log("Rev num" , rev);
  rl.close();
});


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let Min = -Math.pow(2,31);
    let Max = Math.pow(2,31)-1;

    let sign = 1;
    if(x<0){
        sign = sign*(-1)
    }

    x = Math.abs(Number(x));
    let rev = 0;

    while(x>0){
        let rem = x%10; 
        rev = rev*10 + rem;
        x = Math.floor(x/10);
    }

    if(rev < Min || rev > Max){
        return 0;
    }else {
        return rev*sign ; 
    }
    
};