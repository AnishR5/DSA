
function reverseArray (arr, rev=[]){

    if(arr.length === 0){
        console.log("Reveerse :  " , rev);
        return
    }

    rev.push(arr.pop());
    reverseArray(arr,rev);
}

reverseArray([1,2,3,4,5])