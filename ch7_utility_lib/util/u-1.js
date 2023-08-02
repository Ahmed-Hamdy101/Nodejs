// find large
const lg = (ar)=>{
 var large = 0;
    ar.forEach((x)=> {
       if (x >0) {
        large = x;
       }       
    });
    return large;
};

// remove third item from array;
const items = (arr)=>{
leng= arr.length-1;
arr.pop(leng);
return arr;
};

module.exports ={
items ,
lg
}