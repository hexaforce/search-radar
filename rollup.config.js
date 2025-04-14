import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/search-radar.js',
  output: {
    file: 'dist/search-radar.js',
    format: 'es',
    name: 'StarCompass',
    exports: 'default',
  },
  plugins: [terser()],
}
