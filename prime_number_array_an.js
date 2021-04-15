var prime=function(arr){
    var result="";
    for(var i=0;i<arr.length;i++){
    var count=0;
        for(var j=1;j<arr.length;j++){
            if(arr[i]%j===0){
                count++
            }
        }
        if(count===2){
            result+=arr[i]+" ";
        }  
    }
    return result;  
    
}

console.log(prime([1,2,3,4,5,6,7,8,9,10]));
    