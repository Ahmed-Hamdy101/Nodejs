/* 
spilt : seprate the file if there any space
join : replace with '/'
*/
const file = __filename.split(' ').join('/');
module.exports = {
  file,
};
