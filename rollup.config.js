const path = require('path')
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import "core-js/stable";
import "regenerator-runtime/runtime";
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

const out = [
    // browser-friendly UMD build
    {
        input: path.resolve(__dirname, 'assets/js/src'),
        output: {
            name: 'ScriptES5',
            file: path.resolve(__dirname, 'assets/js/script.es5.js'),
            format: 'iife',
            compact: true,
        },
        plugins: [
            resolve({
                browser: true,
            }),
            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                presets: [
                    [
                        '@babel/preset-env'
                    ],
                ],
            }),
            commonjs(), // so Rollup can convert `ms` to an ES module,

            terser({
                sourcemap: true
            }),
            globals(),
            builtins()
        ]
    },

    {
        input: path.resolve(__dirname, 'assets/js/src'),
        output: {
            name: 'ScriptES6',
            file: path.resolve(__dirname, 'assets/js/script.es6.js'),
            format: 'iife',
            compact: true,
        },
        plugins: [
            resolve({
                browser: true,
            }), // so Rollup can find `ms`

            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                presets: [

                        [
                            '@babel/preset-env',
                            {
                                "modules": false,
                                "useBuiltIns": "usage",
                                "corejs": 3,
                                "targets": "Chrome > 60"
                            }
                        ],

                ],
            }),
            commonjs(), // so Rollup can convert `ms` to an ES module,

            terser({
                sourcemap: true
            }),
            globals(),
            builtins()
        ]
    },
];

export default out;
