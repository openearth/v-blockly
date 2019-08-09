# v-blockly
Blockly wrapped in a vue component


# Usage:

To download this package, install it through npm:

    npm install --save v-blockly
    import VBlockly from 'v-blockly'
    Vue.component('v-blockly', VBlockly)

And then in your vue template.

    <v-blockly workspace="workspace.xml" toolbox="toolbox.xml"></v-blockly>

That's it. The package already includes Blockly itself. It's not
possible to keep blockly out of the package as a peer dependency
because we are import blockly using a wrapped imported module.

# Development
This package contains some examples in a storybook that you can run with:

    npm run storybook
