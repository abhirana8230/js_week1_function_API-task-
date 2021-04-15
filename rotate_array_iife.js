(function(arr,k){
    for(var i=0;i<k;i++){
        arr.unshift(arr[arr.length-1]);
        arr.pop(arr[arr.length-1]);
    }
    
console.log(arr)

})([3,13,2,34,11],3);