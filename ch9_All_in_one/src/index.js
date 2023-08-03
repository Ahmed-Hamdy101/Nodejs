// // 1 - run node
// // const  callFile  = require('../../ch2_run_js1/util/util');
// const {file,App,callFile} = require('./util/callMe');
// const node ="run Node from terminal";
// // console.log("Welcome in NodeJs 2.9 "+node);

// // 2 - run  js1
// // - create file util you will call the data as path and use join
// // 3 - run js2
// // 4 - run module system

// // console.log(file);
// const app = new App;
// console.log(app.addFav('Be With Allah'));

// // 5 - run core module

// // path resolve
// // get absolute path :: full path
// const path = require('path');
// const getabs  = path.resolve();

// // path join
// const filx= __filename.split('/').join('\\');
// console.log(filx);

// // path normalize 
// // converte // : / 
// // converte .. : .
// // remove  . :  single dot
// const norm =path.normalize('../../home/tornet/Desktop/Node/Exec01_Nodejs/001_Nodejs/ch9_All_in_one/src/util/callMe.js ');
// console.log(norm);

// // 6 - run event loop : filesystem
// const fs = require('fs');
// const { log } = require('console');
// console.log(" NFS hello this one.");

// process.nextTick(()=>{
//     console.log(' NFS nexttrick -------- before event loop');
// });
 
// setTimeout(() => {
//   console.log("NFS timeout this two.");  
// }, 2000);

// setImmediate(() => {
//     console.log("NFS Imediate this three.");  
//   }, 100);

     
// fs.readFile(__filename,()=>{
//     console.log("hello this one.");

//     process.nextTick(()=>{
//         console.log('nexttrick -------- before event loop');
//     });
     
//     setTimeout(() => {
//       console.log("timeout this two.");  
//     }, 2000);
    
//     setImmediate(() => {
//         console.log("Imediate this three.");  
//       }, 100);
    
         

console.log("Hello NodeJs v18.4");
const file = require('./util/index');
console.log(file);
// mod file exports
const {test} = require('./test');
console.log(test);

const filon = path.resolve()
console.log(filon);

const norms =path.normalize('../path /file');
console.log(norms);

const join = path.join('C:\\users','/linux/filesystem');
console.log(join);

// event loop Filesystem

const f = require('fs');

console.log("Hello word");

process.nextTick(()=>{
  console.log('hello process next-thick');
});

setTimeout(()=>{
console.log('hello setTimeout1 Timer 5s');
},5000);
setImmediate(()=>{
console.log('setImmediate Timer 1s');
});

setTimeout(()=>{
  console.log('hello setTimeout2 Timer 2s');
  },2000);

f.readFile(__filename,()=>{ 
  console.log("Hello word");
  process.nextTick(()=>{
    console.log('hello process next-thick');
  });
  
  setTimeout(()=>{
  console.log('hello setTimeout1 Timer 5s');
  },5000);
  setImmediate(()=>{
  console.log('setImmediate Timer 1s');
  });
  
  setTimeout(()=>{
    console.log('hello setTimeout2 Timer 2s');
    },2000);

});


