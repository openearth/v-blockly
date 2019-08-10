# v-blockly
Blockly wrapped in a vue component


# Usage:

To download this package, install it through npm:

    npm install --save v-blockly
    // Import the component, and optionally Blockly itself
    // You can also import goog if you needed
    // As a side effect the Blockly object is available on the window object
    import VBlockly, { Blockly } from 'v-blockly'
    Vue.component('v-blockly', VBlockly)

And then in your vue template.

    <v-blockly workspace="workspace.xml" toolbox="toolbox.xml"></v-blockly>

That's it. The package already includes Blockly itself. It's not
possible to keep blockly out of the package as a peer dependency
because we are import blockly using a wrapped imported module.

# Development
This package contains some examples in a storybook that you can run with:

    npm run storybook

# Example
You can see a minimal example in this [codesandbox](https://codesandbox.io/s/v-blockly-demo-lp2h7).
