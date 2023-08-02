//create class in javascript

const file = __filename.split(' ').join('/');

const callFile =()=>{
return file;
}
const calSum =(x ,y)=>{
return x + y ;
}
class App {

name(x){
return x ;
}
age(a){

return a ;
}
color(){
const color = "red";
return `<a style=color:${color}> red</a>`    
}
addFav(arug){
const mylist = [];
return mylist.push(arug)
}


}

// console.log(file);   
module.exports={
file,
callFile,
calSum,
App

}
