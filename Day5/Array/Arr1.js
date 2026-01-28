//largest element of array
const larsgestEle = (arr) =>{
    let largest = arr[0];

    for(let i = 1 ; i<arr.length ;i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    console.log("Arr: ",arr ," Largest ele : ",largest);
}


larsgestEle([8,10,5,7,9])