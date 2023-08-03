// import file from utol
const util = require("../ch7_utility_lib/util/u-2");
// import from items and large from u-1 
const { items, lg } = require("./util/u-1");
// log the function links : add both array function in one array
console.log(util.sum([1, 2, 4]), util.links([5, 2, 4], [1, 3, 3]));
// remove one item 
console.log(items([1, 2, 3]));
//get large rumber
console.log(lg([1, 2, 3]));
