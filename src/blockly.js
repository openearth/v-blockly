// Import and make available as global variable
// not all of blockly is converted to modern js yet
// Import and use export module to extract Blockly variable
// eslint-disable-next-line import/no-webpack-loader-syntax
var { Blockly, goog } = require('blockly/blockly_compressed.js')
// Expose it globaly so it can be changed by  other Blocks  import
console.log('Blockly, goog', Blockly, goog)
// set to the windows object, so they are loaded in the next imports
window.Blockly = Blockly
window.goog = goog

// Import with side effects
// eslint-disable-next-line import/no-webpack-loader-syntax
require('blockly/blocks_compressed.js')
// eslint-disable-next-line import/no-webpack-loader-syntax
require('blockly/msg/js/en.js')
export default Blockly
