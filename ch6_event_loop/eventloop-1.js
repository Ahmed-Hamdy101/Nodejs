// MainLine
const fs = require('fs');

console.log('Hello ------- mainline');
// end mainline /pre timers phase1
// excuted by  nodeAPI JS
// Timers  - Pending , Prepare , idle , Poll , Check , Close
process.nextTick(()=>{
console.log('nexttrick -------- before event loop');
});
 
// timers phase 1
 setTimeout(()=>{
  console.log('timeout -- 0s ----- Timers');  
 },3);
 
// timer phase 2
 setImmediate( ()=>{
console.log('Fs -- Immediate --------- Timers 1');

 });

 setTimeout(()=>{
    console.log('timeout -- 1s ----- Timers');  
   },1);

fs.readFile(__filename,()=>{
// 1 . process  with filesystem
// 2 . immediate
// 3 .setTimeout

process.nextTick(()=>{
console.log('nexttrick -------- before event loop');
});
// timers phase 2
 setTimeout(()=>{
  console.log('timeout -- fs:3s ----- Timers');  
 },1);
 
// timer phase 1
 setImmediate( ()=>{
console.log('Immediate --------- Timers 1');

 });

 setTimeout(()=>{
    console.log('timeout -- fs:4s ----- Timers');  
   },3);

})