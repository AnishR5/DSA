const insertionSortAsc = (nums) => {
  console.log(" Unsorted Array : ", nums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }
  console.log(" Sorted Array : ", nums);
};

const insertionSortAscOptimized = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = key;
  }
  return nums;
};

const insertionSortDsc = (nums) => {
  console.log("Unsorted Arr : ", nums);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] > nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }

  console.log("Sorted Array : ", nums);
};

insertionSortAsc([13, 46, 24, 52, 20, 9]);
insertionSortDsc([13, 46, 24, 52, 20, 9]);
