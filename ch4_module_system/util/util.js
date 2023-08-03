// Get filename
const file = __filename.split('/').join('/')
// Get Dirname
const dir = __dirname.split('/').join('/')
//export file to call it in another file
module.exports={file,dir};
