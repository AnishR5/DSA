const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number ", function (number) {
  // Approach 1
  // let digits = 0;
  // while(number>=1){
  //     digits++;
  //     number= Math.floor(number/10);
  // }

  //Approach 2 (Most optimized)
  //const digits = number.replace("-", "").length;

  //Approach 3 Logarithmic
  //digits=⌊log10​(∣n∣)⌋+1
  //     log₁₀(100) = 2 because 10^2 = 100
  // log₁₀(999) ≈ 2.999
  // log₁₀(500) ≈ 2.698
  let num = Number(number)
  if(num === 0) console.log("1");
  else{
    let digits = Math.floor(Math.log10(Math.abs(number))) + 1;
    console.log(digits);
  }
  
  rl.close();
});
