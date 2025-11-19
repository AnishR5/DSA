function bubbleSort () {
    //let arr = [13,42,24,52,20,9];
    let arr = [9,13,20,24,52,64];

    for(let i = arr.length - 1;i>=1;i--){

        let didSwap = 0;
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
                didSwap =1;
            }
        }

        console.log("looping");
        if(didSwap === 0) {
            break
        }
    }

    console.log("Sorted Array : ", arr);
}

bubbleSort()