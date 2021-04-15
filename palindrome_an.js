var palindrome=function(arr){
    for(let i=0;i<arr.length;i++){
        var res=arr.map((item)=>{
            item=item.toString()
            return item.split("").reverse().join("");
        })
    }
    var result=[]
    for(var i=0;i<arr.length;i++){
        for(let j=0;j<res.length;j++){
            if(arr[i]==res[j]){
                result.push(arr[i])
                break;
            }
        }
    }
    return (result);
    
    
}
console.log(palindrome([1,11,343,411,575,600,7887,80108,999,11]));