import buble from 'rollup-plugin-buble'
import cleanup from 'rollup-plugin-cleanup'

module.exports = {
  entry: 'src/addmonths.js',
  plugins: [
    buble(),
    cleanup()
  ],
  moduleName: 'addMonths',
  interop: false,
  targets: [
    { format: 'cjs', dest: 'dist/addmonths.js' },
    { format: 'es', dest: 'dist/addmonths.es6.js' },
    { format: 'umd', dest: 'dist/addmonths.umd.js' }
  ]
}
