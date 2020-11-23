/** @title 获取绝对数据类型 */

import { isArray, isBoolean, isNumber, isObject, isString, isFunction } from '../judgment'

/**
 * 根据数据源获取数据
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getDataByOrigin = (origin: any, path: string, defaults?: any) => {
  if (!origin || !isString(path)) return defaults

  const result = path.split('.').reduce((t: any = {}, c: string) => {
    return t?.[c]
  }, origin)

  return result || defaults
}

/**
 * 根据数据源获取数组
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getArray = (origin: any, path: string, defaults = []) => {
  const res = getDataByOrigin(origin, path, defaults)
  return isArray(res) ? res : defaults
}

/**
 * 根据数据源获取对象
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getObject = (origin: any, path: string, defaults = {}) => {
  const res = getDataByOrigin(origin, path, defaults)
  return isObject(res) ? res : defaults
}

/**
 * 根据数据源获取字符串
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getString = (origin: any, path: string, defaults = '') => {
  const res = getDataByOrigin(origin, path, defaults)
  return isString(res) ? res : (res?.toString() || defaults)
}

/**
 * 根据数据源获取数值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getNumber = (origin: any, path: string, defaults = 0) => {
  const res = getDataByOrigin(origin, path, defaults)
  return isNumber(res) ? res : (Number(res) || defaults)
}

/**
 * 根据数据源获取布尔值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getBoolean = (origin: any, path: string, defaults = false) => {
  const res = getDataByOrigin(origin, path, defaults)
  return isBoolean(res) ? res : (Boolean(res) || defaults)
}

/**
 * 根据数据源获取函数
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getFunction = (origin: any, path: string, defaults = () => {}) => {
  const res = getDataByOrigin(origin, path, defaults)
  return isFunction(res) ? res : defaults
}
