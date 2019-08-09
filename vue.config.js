module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    module: {
      rules: [
        {
          test: /blockly\/blocks_compressed\.js/,
          use: 'exports-loader?Blockly,goog'
        },
        {
          test: /blockly\/blockly_compressed\.js/,
          use: 'imports-loader?Blockly=>window.Blockly,goog=>window.goog'
        },
        {
          test: /blockly\/msg\/js\/en.js/,
          use: 'imports-loader?Blockly=>window.Blockly,goog=>window.goog'
        }
      ]
    }
  }
}
