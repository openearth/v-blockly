module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    // load exports
    config.module
      .rule('export')
      .test(/blockly\/blockly_compressed\.js/)
      .use('exports-loader?Blockly,goog')
      .loader('exports-loader')
      .end()
    config.module
      .rule('import')
      .test(/blockly\/blocks_compressed\.js/)
      .use('imports-loader?Blockly=>window.Blockly,goog=>window.goog')
      .loader('imports-loader')
      .end()
    config.module
      .rule('import')
      .test(/blockly\/msg\/js\/en.js/)
      .use('imports-loader?Blockly=>window.Blockly,goog=>window.goog')
      .loader('imports-loader')
      .end()
  }
}
