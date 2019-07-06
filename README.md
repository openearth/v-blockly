# v-blockly
Blockly wrapped in a vue component


# Usage:

To download this package, install it through npm:

    npm install --save v-blockly

To use the package in your code import and [register](https://vuejs.org/v2/guide/components-registration.html) it. This assumes you are using a `vue-loader`.

    import VBlockly from 'v-blockly'
    Vue.component('v-blockly', VBlockly)

And then in your vue template.

    <v-blockly workspace="workspace.xml" toolbox="toolbox.xml"></v-blockly>

That's it.

# Development
This package contains some examples in a storybook that you can run with:

    npm run storybook
