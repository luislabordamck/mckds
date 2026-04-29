const StyleDictionary = require('style-dictionary')

module.exports = {
  source: ['tokens/Style_tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'mck',
      buildPath: 'app/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root'
          }
        }
      ]
    }
  }
}