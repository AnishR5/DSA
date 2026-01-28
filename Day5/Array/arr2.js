// smallest, second smallest ,largest ,second largest element of array 

const secondLargestSort = (arr) => {
    let sorted = arr.sort((a,b) => a-b);
    console.log("Array : ", arr, " Second largest : ", sorted[sorted.length - 2]);
}

const secondLargest = (arr) => {
    let max = arr[0];
    let secondMax = arr[1];

    if(max < secondMax){
        let temp =max;
        max = secondMax;
        secondMax = temp;
    }

    for(let i=2 ; i<arr.length ; i++){
        let ele = arr[i];
        if(ele > max){
            let temp = max; 
            max = ele;
            secondLargest = temp;
        }

        if (ele < max && ele > secondMax) {
            secondMax = ele ;
        }
    }

    console.log("Array : ", arr, ' Largest : ',max , " Second largest : ", secondMax);

}

//secondLargestSort([8,10,5,7,9])
secondLargest([8,10,5,7,9])