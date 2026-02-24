const bubbleSortAsc = (nums) => {
  console.log("Unsorted Arr : ", nums);
  let isAlreadySorted = true;
  for (let i = nums.length - 1; i >= 0; i--) {
    
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isAlreadySorted = false;
      }
    }

    if(isAlreadySorted) {
        console.log("Array Already sorted");
        return
    }
  }

  console.log("Sorted Arr : ", nums);
};

const bubbleSortDsc = (nums) => {
  console.log("Unsorted Arr : ", nums);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log("Sorted Arr : ", nums);
};

bubbleSortAsc([13, 46, 24, 52, 20, 9]);
bubbleSortDsc([13, 46, 24, 52, 20, 9]);
bubbleSortAsc([9, 13, 20, 24, 46, 52])