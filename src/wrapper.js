// following:
// https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#How-do-I-configure-the-Rollup-build
// But then using webpack because I use the exports-loader to be able to import blockly

// Import vue component
import VBlockly from './VBlockly.vue'

// Declare install function executed by Vue.use()
export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VBlockly', VBlockly)
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export default VBlockly
