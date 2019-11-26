<<<<<<< HEAD
const {override,fixBabelImports,addWebpackAlias}  = require('customize-cra');
const path = require('path')

module.exports = override(
  fixBabelImports('import',{
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ['@']:path.reslove(__dirname,'src')
  })
=======
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src')
    })
>>>>>>> 30eeee5ab3256865b3a2bcc3244945e05026d700
)