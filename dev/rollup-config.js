import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import license from 'rollup-plugin-license';

import path from 'path';

export default {
  entry: 'app/aot.js',
  dest: 'dist/build.js',
  sourceMap: true,
  sourceMapFile: 'dist/build.js.map',
  format: 'iife',
  plugins: [
    nodeResolve({
      jsnext: true, 
      module: true
    }),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/angular-in-memory-web-api/**',
        'node_modules/md-jml/**',
        'node_modules/jml-h/**',
      ],
    }),
    uglify(),
    license({
      banner: {
        file: path.join(__dirname, '../LICENSE')
      }
    })
  ]
}
