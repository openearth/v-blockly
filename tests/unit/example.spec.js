import { shallowMount } from '@vue/test-utils'
const jsdom = require("jsdom")
const { JSDOM } = jsdom
global.dom = new JSDOM('<!doctype html><html><body></body></html>')
global.window = dom.window
import VBlockly from '@/VBlockly'


// describe('VBlockly.vue', () => {
//   it('renders', () => {
//     const wrapper = shallowMount(VBlockly, {
//       propsData: { }
//     })
//     expect(wrapper.text()).toExist()
//   })
// })
