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
          store: './store'
        }
      }
    ],
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }]
  ]
}
