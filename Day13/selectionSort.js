const selectionSortAsc = (nums) => {
  console.log("Unorted Array : ", nums);
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }

  console.log("Sorted Array : ", nums);
};

const selectionSortDsc = (nums) => {
  console.log("Unorted Array : ", nums);
  for (let i = 0; i < nums.length; i++) {
    let maxIndex = i;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }

    [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
  }

  console.log("Sorted Array : ", nums);
};

selectionSortAsc([7, 5, 9, 2, 8]);
selectionSortDsc([7, 5, 9, 2, 8]);