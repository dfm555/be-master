/**
 * @type {import('next').NextConfig}
 */

const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/antd-theme.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}
const withAntdLess = require('next-plugin-antd-less')
module.exports = withAntdLess({
  modifyVars: themeVariables,
  lessVarsFilePathAppendToEndOfContent: false,
  webpack(config) {
    return config
  }
})
