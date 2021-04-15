var rotate=function(arr,k){
    for(var i=0;i<k;i++){
        arr.unshift(arr[arr.length-1]);
        arr.pop(arr[arr.length-1]);
    }
    
return(arr);

}
console.log(rotate([3,13,2,34,11],3));