var odd=function(arr){
    var result=[]
    for(var i=0;i<arr.length;i++)
    {
        
        if(arr[i]%2!==0)
        {
            result.push(arr[i])
        
        }
    }
    
    return result;
    
        
}
console.log(odd([1,2,3,4]))
