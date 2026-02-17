// Approach 1
const missingNum = (arr) => {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    let ele1 = arr[i];
    let ele2 = arr[i + 1];
    if (ele1 !== ele2 - 1) {
      console.log("Missing num : ", ele1 + 1);
      return
    }
  }
};

//approach2
const findMissing = (arr) => {
    let sumOfArr = 0;
    for(let i=0; i<arr.length;i++){
        sumOfArr+=arr[i];
    }

    let n = arr.length+1;

    let sumOfNNum = (n*(n+1))/2;
    let missNum = sumOfNNum - sumOfArr; 
    console.log("Missing num : ", missNum);
    return
}
missingNum([8, 2, 4, 5, 3, 7, 1]);
missingNum([1, 2, 3, 5])

findMissing([8, 2, 4, 5, 3, 7, 1])
findMissing([1, 2, 3, 5])