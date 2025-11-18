const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPalindrome (str){

    if (str.length <= 1) return console.log("true");;

    if(str[0]!== str[str.length -1]) return console.log("false");


    checkPalindrome(str.slice(1,-1))
}

rl.question("Enter String ", function(num) {

  checkPalindrome(num)

  rl.close();
});
