exports.get = () => {
  return {
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules: true
        }
      ],
      ['@babel/plugin-syntax-dynamic-import'],
      ['dynamic-import-node'],
      [
        'component',
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }
      ]
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage'
        }
      ]
    ]
  }
}
