// Import and make available as global variable
// not all of blockly is converted to modern js yet
// Import and use export module to extract Blockly variable
var exports = require('exports-loader?Blockly,goog!blockly/blockly_compressed.js')
// Expose it globaly so it can be changed by  other Blocks  import

window.Blockly = exports.Blockly
window.goog = exports.goog
export default Blockly
// Import for side effects
require('blockly/blocks_compressed.js')
require('blockly/msg/js/en.js')
