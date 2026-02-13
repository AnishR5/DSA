const bubbleSort = (arr) =>{

    console.log("Original Arr", arr);
    for(let i=arr.length -1 ; i>=0 ; i--){
        let didSwapHappen = false;
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                didSwapHappen =true
            }
        }

        if((i === arr.length -1) && !didSwapHappen){
            console.log("Array Already sorted");
            return
        }
    }
    console.log("Sorted Arr", arr);
}

bubbleSort([13,46,24,52,20,9])
bubbleSort([1,2,3,4])