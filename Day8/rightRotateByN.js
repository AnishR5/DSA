
const readline = require("readline");

const RightRotateByN = (nums, k) => {
  console.log("Original Arr", arr);
  try {
    for (let i = 1; i <= k; i++) {
     let secondEle ;
     let lastEle = nums[nums.length -1]
     for(let j=0;j<nums.length -1;j++){
        let temp = nums[j+1];
        nums[j+1] = secondEle ?? nums[j];
        secondEle = temp;
     }
     nums[0] =lastEle;
    }
    console.log("Array after ", n, " roatations: ", arr);
  } catch (error) {
    console.log("Error im left", error);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number  ", function (num) {
  RightRotateByN([1, 2, 3, 4, 5], num);
  rl.close();
});
