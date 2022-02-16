/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
// 与平台无关的配置 { 指令 与 ref }
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// createPatchFunction 函数在 weex的runtime 也会被执行, 只是传入的方法就不一样了
export const patch: Function = createPatchFunction({ nodeOps, modules })
