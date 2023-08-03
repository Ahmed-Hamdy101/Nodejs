/* 
spilt : seprate the file if there any space
join : replace with '/'
*/
const file = __filename.split(' ').join('/');
// export the file its like export default name in ES6 
module.exports = {
  file,
};
