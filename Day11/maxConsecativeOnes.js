const findMaxConsecativeOnes = (arr) =>{
    let consecativeOnes = 0; 
    let max = 0 ;
    for(let i=0 ; i<arr.length;i++){
        if(arr[i] === 1){
            consecativeOnes++;
        }else{
            consecativeOnes=0;
        }

         max = Math.max(max, consecativeOnes);
    }

    console.log("Max Consecative one : ", max);
    return
}

findMaxConsecativeOnes([1, 1, 0, 1, 1, 1])
findMaxConsecativeOnes([1, 0, 1, 1, 0, 1])