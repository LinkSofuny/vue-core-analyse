/* @flow */

import { ASSET_TYPES } from 'shared/constants'
import { isPlainObject, validateComponentName } from '../util/index'

export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   * 组件函数的初始化地
   */
  ASSET_TYPES.forEach(type => {
    /**
     *  Vue.component
     */
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id // 赋值name
          // 原型链继承大法
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        /**
         * 如定义了一个 hellowWorld组件 则 => this.options.component.hellowWorld = 组件构造函数
         */
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
