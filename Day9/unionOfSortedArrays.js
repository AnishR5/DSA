const unionOfSortedArrays = (arr1, arr2) =>{
    let uniqueArr = [];
    console.log("Arr1 : ", arr1," Arr2",arr2);

    for (let i = 0; i < arr1.length; i++) {
        if(!uniqueArr.includes(arr1[i])){
            uniqueArr.push(arr1[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if(!uniqueArr.includes(arr2[i])){
            uniqueArr.push(arr2[i])
        }
    }

    console.log("UniqueArr : ", uniqueArr);
}

unionOfSortedArrays([1,2,3,4,5],[2,3,4,4,5])