/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

// 实际暴露的事 ./to-function.js的 compileToFunctions
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
