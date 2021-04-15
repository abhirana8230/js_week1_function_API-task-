(function(arr){
    arr.sort();
    for(var i=0;i<arr.length;i++){
        
        for(var j=1;j<arr.length;j++){
            
            var res=arr.filter((item)=>{
                var count=0
                if(arr[i]===arr[j]){
                    count++
                    return arr.splice(i+1,count)
                }
            })
        }
        
    }
   
 console.log(res)
    
})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);