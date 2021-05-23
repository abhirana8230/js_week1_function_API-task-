var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i in data){
        try{
            var cname=data[i].name;
            var latlong=data[i].latlng;
            if(latlong===0)throw new Error('Latitude of this particular location not found');
            print(cname,...latlong);
        }
        catch(e){
            console.log('invalid coordinate details'+ cname+''+e.message);
        }
    }
    
};

var print=function(cname,lat,long){
    var key='e4ef377d6d0162e425930fe1405a2319';
    var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
    var weather = new XMLHttpRequest();
    weather.open('GET',URL,true);
    weather.send();
    weather.onload=function(){
        try{
            var result=JSON.parse(this.response);
            console.log(`${cname}:${result.main.temp}`);
        }
        catch(e){
            console.log('invalid response from'+ cname);
        }
    }

}