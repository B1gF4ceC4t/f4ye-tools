import path from 'path';
import { name } from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import merge from 'webpack-merge';
import commonjs from 'rollup-plugin-commonjs';

const config = {
  input: './tools/index.js',
  output: {
    name: 'f4yeTools',
    file: path.resolve(__dirname, `dist/${name}.js`),
    format: 'umd'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
  ]
};

const packages = [
  {},
  {
    output: {
      file: path.resolve(__dirname, `dist/${name}.min.js`),
      format: 'umd'
    },
    plugins: [uglify()]
  },
  {
    output: {
      file: path.resolve(__dirname, `dist/${name}.es.js`),
      format: 'es'
    }
  },
  {
    output: {
      file: path.resolve(__dirname, `dist/${name}.cjs.js`),
      format: 'cjs'
    }
  }
];

let result = [];
for (let item of packages) {
  result.push(merge(config, item));
}

export default result;
