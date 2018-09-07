module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-custom-properties'),
      require('css-mqpacker'),
      require('cssnano')({
          preset: ['default', {
            cssDeclarationSorter: false,
          }],
      }),
    ]
}
