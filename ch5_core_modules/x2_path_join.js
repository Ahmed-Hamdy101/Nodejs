// concat string to create path that across
//console module
const { log } = require("console");
// path module
const path = require("path");
// win path
const win = "util\\file\\win";
// convert win to linux
const inLinux = win.split("\\").join("/");
// convert linux to win 
const inWin = inLinux.split("/").join("\\");
// output linux
log("linux : " + inLinux);
// output  win
log("win : " + inWin);
