import {defineConfig} from 'rollup';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    postcss({
      extensions: ['.css']
    }),
    nodeResolve({
      extensions: ['.js','.jsx']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' ),
      preventAssignment: true
    }),
    babel({
      presets: ['@babel/preset-react']
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: [".","dist"],
      host: 'localhost',
      port: 3000
    }),
    livereload({ watch: "dist" }),
  ]
})