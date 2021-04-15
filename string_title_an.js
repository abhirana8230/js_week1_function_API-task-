var str_title=function(str){
    
   var m_str=str.split(" ");
    var res=m_str.map((item)=>{
        return (item[0].toUpperCase()+item.slice(1,m_str.length));
    })
    
    return (res.join(" "));
}

console.log(str_title("my name is rana"))
