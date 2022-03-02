/* @flow */

import { extend, warn, isObject } from 'core/util/index'

/**
 * Runtime helper for rendering <slot>  就是 _t
 */
export function renderSlot (
  name: string,
  fallbackRender: ?((() => Array<VNode>) | Array<VNode>),
  props: ?Object,
  bindObject: ?Object
): ?Array<VNode> {
  // 拿到parse阶段, 生成的 ast函数
  // 这个组件如果有作用域插槽的话, 生产的时候 在data.scopedSlots 是会存放对应的插槽函数的
  const scopedSlotFn = this.$scopedSlots[name]
  let nodes
  if (scopedSlotFn) {
    // scoped slot 作用域插槽
    props = props || {}
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this)
      }
      props = extend(extend({}, bindObject), props)
    }
    // 作用域插槽, 为什么可以将子组件内部的参数传递给子组件外部?
    // 因为我们在子组件的slot中定义的参数 在编译阶段会被合并成一个 props 对象
    // 传递给 scopedSlotFn 也就是我们父组件的 插槽内容中
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender)
  } else {
    // 其实就是将我们定义在 组件DOM结构下的children中
    // 拿到 slot="xxx" 名字对应的
    // 好比 现在_t('header')
    // 就拿到 slot="header" 的那个tag
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender)
  }

  const target = props && props.slot
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}
