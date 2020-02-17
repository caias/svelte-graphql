import path from 'path';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import livereload from 'rollup-plugin-livereload';
import autoPreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
const dist = path.resolve(__dirname, 'public/dist/');

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'iife',
    name: 'app',
    file: path.join(dist, 'bundle.js'),
  },
  plugins: [
    svelte({
      dev: !production,
      preprocess: autoPreprocess(),
      css: css => css.write(path.join(dist, 'bundle.css')),
    }),
    alias({
      resolve: ['', '.svelte', '.js'],
      entries: [
        {
          find: '~', replacement: path.resolve(__dirname, 'src/'),
        },
      ],
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    !production && livereload('public/dist'),
    commonjs(),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};