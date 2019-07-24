// Import and make available as global variable
// not all of blockly is converted to modern js yet
// Import and use export module to extract Blockly variable
// eslint-disable-next-line import/no-webpack-loader-syntax
var exports = require('exports-loader?Blockly,goog!blockly/blockly_compressed.js')
// Expose it globaly so it can be changed by  other Blocks  import

window.Blockly = exports.Blockly
window.goog = exports.goog
// Import for side effects
require('blockly/blocks_compressed.js')
require('blockly/msg/js/en.js')
export default window.Blockly
