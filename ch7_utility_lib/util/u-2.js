// find large
const sum = (array)=>{
    var sum = 0;
    array.forEach((i)=> {
        sum+=i;
    });
    return sum;
   };
   
   // remove third item from array;
   const links = (ar1 , ar2)=>{
    var temp =[];
    temp.push(ar1);
    temp.push(ar2);
    return temp;
   };
   
   module.exports ={
   sum ,
   links
   }