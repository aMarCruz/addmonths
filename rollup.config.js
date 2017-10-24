import buble from 'rollup-plugin-buble'
import cleanup from 'rollup-plugin-cleanup'

export default [
  {
    input: 'src/addmonths.js',
    name: 'addMonths',
    output: {
      file: 'dist/addmonths.js', format: 'umd'
    },
    plugins: [
      buble(),
      cleanup()
    ]
  },
  {
    input: 'src/addmonths.js',
    output: {
      file: 'dist/addmonths.esm.js', format: 'es'
    },
    plugins: [
      buble(),
      cleanup()
    ]
  },
  {
    input: 'src/addmonths_auto.js',
    output: {
      file: 'dist/addmonths.auto.js', format: 'iife'
    },
    plugins: [
      buble(),
      cleanup()
    ],
  }
]
