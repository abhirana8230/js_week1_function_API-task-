(function(str){
    var m_str=str.split(" ");
    var res=m_str.map((item)=>{
        return (item[0].toUpperCase()+item.slice(1,m_str.length));
        
    })
    console.log(res.join(" "));
    
})("my name is rana");