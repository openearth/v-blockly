/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action, actions } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, button } from '@storybook/addon-knobs';
import Vue from 'vue';
import VBlockly from '../src/VBlockly.vue';

Vue.component('v-blockly', VBlockly)

storiesOf('VBlockly', module)
// make sure to pass style information
  .addDecorator(withKnobs)
  .add('empty', () => '<v-blockly style="width:500px; height:300px;"></v-blockly>')
  .add('workspace', () => '<v-blockly style="width:500px; height:300px;" workspace="workspace.xml"></v-blockly>')
  .add('workspace with fixed format', () => '<div><v-blockly style="width:500px; height:300px;" workspace="workspace.xml"></v-blockly></div>')
  .add('workspace with toolbox', () => '<div><v-blockly style="width:500px; height:300px;" workspace="workspace.xml" toolbox="toolbox.xml"></v-blockly></div>')
  .add('workspace with toolbox resize', () => {
    return {
      template: '<v-blockly workspace="workspace-collapsed.xml" toolbox="toolbox.xml"></v-blockly>',
      mounted () {
        this.normal()
        setTimeout(() => {this.small}, 1000)
        setTimeout(() => {this.big}, 3000)
        setTimeout(() => {this.normal}, 4000)
        button('small', () => {
          this.small()
        })
        button('big', () => {
          this.big()
        })
        button('normal', () => {
          this.normal()
        })

      },
      methods: {
        small () {
          this.$el.style = 'height: 200px; width: 300px; border: 1px solid red;'
        },
        big () {
          this.$el.style = 'height: 800px; width: 800px; border: 1px solid red;'
        },
        normal () {
          this.$el.style = 'height: 300px; width: 600px; border: 1px solid red;'
        }
      }

    }
  })
  .add('workspace with events', () => {
    return {
      template: `<div><v-blockly workspace="workspace.xml" style="width:300px; height:300px; float:left;" @change="change"></v-blockly></div>`,
      methods: actions('change')
    }
  })
