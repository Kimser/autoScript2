// rollup.config.js
// import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner'
import json from '@rollup/plugin-json'

export default {
    input: 'src/index.js',
    output: {
        file: './dist/index.js',
        format: 'es',
        sourcemap: true,
    },
    plugins: [
        resolve(), // 用于解析模块路径，使 Rollup 能够找到引入的模块。
        commonjs(), // 将 CommonJS 模块转换为 ES6 模块，以便 Rollup 处理
        // terser(), // 可选插件，用于压缩代码。可以通过注释或删除 terser() 行来禁用代码压缩。
        json(), // 用于解析json文件
        cleaner({
            targets: [
                './dist' // 每次打包清除dist目录
            ]
        })
    ],
};
