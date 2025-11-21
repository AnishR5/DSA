function secondLargest () {
    const arr = [3,1,654,232,435,2,34,353,23];

    // let sorted= arr.sort((a,b) => b-a);
    // console.log("Second largest", sorted[1]);
    // console.log("largest ", sorted[0]);

    let small = Infinity;
  let second_small = Infinity;
  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < second_small && arr[i] !== small)
      second_small = arr[i];
    if (arr[i] > second_large && arr[i] !== large)
      second_large = arr[i];
  }

  console.log("Second smallest is " + second_small);
  console.log("Second largest is " + second_large);
}

secondLargest()