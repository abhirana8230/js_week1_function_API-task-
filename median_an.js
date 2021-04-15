var median_array=function(arr1,arr2){
    var m_arr1= arr1.sort()
    var m_arr2=arr2.sort()
    var res=[...m_arr1,...m_arr2]
     res.sort()
     var median=0;
     if(res.length%2===0){
         median=(res[res.length/2]+res[(res.length/2)-1])/2;
     }
     return(median);
     
 }
 console.log(median_array([2,4,8,6],[1,3,9,7]));