function findLargestElement () {
    const arr = [3,1,654,232,435,2,34,353,23]

    let largestElement = arr[0];
    for(let i=1;i<arr.length - 1; i++){
        if(arr[i]>largestElement){
            largestElement = arr[i];
        }
    }

    console.log("largest ", largestElement);
}

findLargestElement()