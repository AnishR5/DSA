const findSingleNumber1 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    let ele = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (ele === nums[j]) {
        cnt++;
      }
      if (cnt > 1) {
        break;
      }
    }
    if (cnt === 1) {
      console.log("Single num : ", ele);
      return;
    }
  }
};

const findSingleNumber2 = (nums) => {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1);
  }

  for (const [num, count] of numMap.entries()) {
    if (count === 1) {
      console.log("Single num : ",num);
      return
    }
  }
};

const findSingleNumber3 = (nums) =>{
    let singnum = 0 ;

    for(const num of nums){
        singnum ^= num;
    }
    console.log("Single num : ",singnum);
}

// findSingleNumber1([4, 1, 2, 1, 2]);
// findSingleNumber1([2, 2, 1]);

// findSingleNumber2([4, 1, 2, 1, 2]);
// findSingleNumber2([2, 2, 1]);

findSingleNumber3([4, 1, 2, 1, 2]);
findSingleNumber3([2, 2, 1]);


