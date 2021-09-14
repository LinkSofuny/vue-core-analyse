/*
 * @Author: your name
 * @Date: 2021-09-13 11:39:57
 * @LastEditTime: 2021-09-14 16:21:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-core\src\core\util\lang.js
 */
/* @flow */

export const emptyObject = Object.freeze({})

/**
 * Check if a string starts with $ or _
 */
export function isReserved (str: string): boolean {
  const c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}
/**
 * @description:
 * @param {*} obj 添加属性的目标对象
 * @param {*} key 键
 * @param {*} val 值
 * @param {*} enumerable 是否可枚举
 * @return {*}
 */
export function def (obj: Object, key: string, val: any, enumerable?: boolean) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

/**
 * Parse simple path.
 */
const bailRE = /[^\w.$]/
export function parsePath (path: string): any {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}
