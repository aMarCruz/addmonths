import buble from 'rollup-plugin-buble'
import cleanup from 'rollup-plugin-cleanup'

export default [
  {
    entry: 'src/addmonths.js',
    dest: 'dist/addmonths.js',
    format: 'umd',
    moduleName: 'addMonths',
    plugins: [
      buble(),
      cleanup()
    ]
  },
  {
    entry: 'src/addmonths.js',
    dest: 'dist/addmonths.esm.js',
    format: 'es',
    plugins: [
      buble(),
      cleanup()
    ]
  },
  {
    entry: 'src/addmonths_auto.js',
    dest: 'dist/addmonths.auto.js',
    format: 'iife',
    plugins: [
      buble(),
      cleanup()
    ],
  }
]
