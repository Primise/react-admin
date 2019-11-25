const {override,fixBabelImports,addLessLoader,addWebpackAlias}  = require('custommize-cra');
const path = require('path')
module.exports = override(
  fixBabelImports('import',{
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ['@']:Path2D.reslove(__dirname,'src')
  })
)