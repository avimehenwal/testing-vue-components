import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import VuePlugin from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
// import { nodeResolve } from '@rollup/plugin-node-resolve'; // Unresolved dependencies
// import globals from 'rollup-plugin-node-globals';
// import builtins from 'rollup-plugin-node-builtins';

// Build more than one bundles
export default [{
  // Path relative to package.json
  input: 'Apps/withjestpreset/src/components/wrapper.js',
  output: [
    {
      format: 'umd',                        // umd format requires a bundles name
      name: 'MyComponent',
      file: 'dist/my-component.umd.js',
      globals: {
        vue: 'VuePlugin'
      },
    },
    {
      format: 'es',
      file: 'dist/my-component.esm.js',
      globals: {
        vue: 'VuePlugin'
      },
    },
    {
      format: 'iife',
      file: 'dist/my-component.min.js',
      globals: {
        vue: 'VuePlugin'
      },
    }
  ],
  // output: {
  //   exports: 'named',
  // },
  plugins: [
    commonjs(),
    VuePlugin({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
      template: {
        isProduction: true,
      },
    }),
    buble(), // Transpile to ES5
    // nodeResolve({ preferBuiltins: false }),  // or true
    // globals(),
    // builtins(),
  ],
},
{
  input: 'Apps/withjestpreset/src/components/temprature.vue',
  exports: 'named',
  globals: {
    vue: 'VuePlugin'
  },
  // Build more than one bundle
  output: [
    {
      format: 'umd',                        // umd format requires a bundles name
      name: 'Temprature',
      file: 'dist/temperature.umd.js',
      globals: {
        vue: 'VuePlugin'
      },
    },
    {
      format: 'es',
      file: 'dist/temperature.esm.js',
      globals: {
        vue: 'VuePlugin'
      },
    },
    {
      format: 'iife',
      file: 'dist/temperature.min.js',
      globals: {
        vue: 'VuePlugin'
      },
    }
  ],
  plugins: [
    // vue({ template: { optimizeSSR: true } })
    commonjs(),
    VuePlugin({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
      template: {
        isProduction: true,
      },
    }),
    buble()
  ]
}]