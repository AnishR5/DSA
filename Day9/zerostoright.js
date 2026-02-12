const zerosToRightb = (nums) => {
  try {
    console.log("Original  nums", nums);
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
      let ele = nums[i];
      if (ele > 0) {
        temp.push(ele);
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (i < temp.length) {
        nums[i] = temp[i];
      } else {
        nums[i] = 0;
      }
    }
    console.log("Expected  nums", nums);
  } catch (error) {
    console.error("Error", error);
  }
};


const zerosToRightOptimal = (nums) => {
  try {
    console.log("Original  nums", nums);
    let j = -1;

    for(let i = 0;i<nums.length ; i++){
        if(nums[i] === 0){
            j=i;
            break;
        }
    }

    if(j === -1){
        console.log("No zeros found");
        return
    }

    for(let i = j+1 ; i<nums.length ; i++){

        if(nums[i] !== 0){
            [nums[i] , nums[j]] = [nums[j],nums[i]];
            j++
        }
    }

    console.log("Expected  nums", nums);
  } catch (error) {
    console.error("Error", error);
  }
};

zerosToRightOptimal([1,0,2,3,0,4,0,1]);

zerosToRightOptimal([1,2,0,1,0,4,0])
