const twosum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        if (nums[i] + nums[j] === target) {
          console.log("Yes");
          return;
        }
      }
    }
  }
  console.log("NO");
  return;
};

const twosum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) {
        console.log("Yes");
        return;
      }
      j++
    }
  }
  console.log("NO");
  return;
};

twosum2([2, 6, 5, 8, 11], 14);
twosum2([2, 6, 5, 8, 11], 15);