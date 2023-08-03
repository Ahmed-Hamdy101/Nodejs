// split the path of file by ' ' name and add '/'
const file = __filename.split(' ').join('/')
// split the path of dir by ' ' name and add '/'
const dir = __dirname.split(' ').join('/')
//export file to call it in another file
module.exports={file,dir};
