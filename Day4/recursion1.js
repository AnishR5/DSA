
function print10times (n=0) {

    console.log("Hello", n);

    if(n===10){
        return
    }

    print10times(n+1)

}


print10times();