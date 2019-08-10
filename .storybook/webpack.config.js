module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  let extraRules = [
    {
      test: /blockly\/blockly_compressed\.js/,
      use: 'exports-loader?Blockly,goog'
    },
    {
      test: /blockly\/blocks_compressed\.js/,
      use: 'imports-loader?Blockly=>window.Blockly,goog=>window.goog'
    },
    {
      test: /blockly\/msg\/js\/en.js/,
      use: 'imports-loader?Blockly=>window.Blockly,goog=>window.goog'
    }
  ]
  // add the extra rules
  extraRules.forEach(
    rule => config.module.rules.push(rule)
  )

  // Return the altered config
  return config;
};
