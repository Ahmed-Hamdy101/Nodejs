const util = require('../ch7_utility_lib/util/u-2')
const {items , lg } = require('./util/u-1');

console.log(util.sum([1,2,4]),util.links([5,2,4] , [1,3,3]));
console.log(items([1,2,3]));
console.log(lg([1,2,3]));