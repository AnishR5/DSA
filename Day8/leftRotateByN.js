const readline = require("readline");

const leftRotateByN = (arr, n) => {
  console.log("Original Arr", arr);
  try {
    for (let i = 1; i <= n; i++) {
      let firstTerm = arr[0];
      for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = firstTerm;
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
  leftRotateByN([1, 2, 3, 4, 5], num);
  rl.close();
});
