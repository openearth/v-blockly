// Import and make available as global variable
// not all of blockly is converted to modern js yet
// Import and use export module to extract Blockly variable
// eslint-disable-next-line import/no-webpack-loader-syntax
var { Blockly, goog } = require('blockly/blockly_compressed.js')
// set to the windows object, so they are loaded in the next imports

window.Blockly = Blockly
window.goog = goog


// Import with side effects
// eslint-disable-next-line import/no-webpack-loader-syntax
// this does not work in node testing (global goog is not available)
require('blockly/msg/js/en.js')
// eslint-disable-next-line import/no-webpack-loader-syntax
require('blockly/blocks_compressed.js')
export {
  Blockly,
  goog
}
