module.exports = {
  presets: [['next/babel']],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          styles: './styles',
          components: './components',
          pages: './pages',
          public: './public',
          context: './context',
          utils: './utils'
        }
      }
    ],
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }]
  ]
}
