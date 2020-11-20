/** @title 获取绝对数据类型 */

/**
 * 根据数据源获取数据
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getDataByOrigin = (origin: any, path: string, defaults?: any) => {
  if (!origin || typeof path !== 'string') return defaults

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
  return getDataByOrigin(origin, path, defaults)
}

/**
 * 根据数据源获取对象
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getObject = (origin: any, path: string, defaults = {}) => {
  return getDataByOrigin(origin, path, defaults)
}

/**
 * 根据数据源获取字符串
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getString = (origin: any, path: string, defaults = '') => {
  return getDataByOrigin(origin, path, defaults)
}

/**
 * 根据数据源获取数值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getNumber = (origin: any, path: string, defaults = 0) => {
  return getDataByOrigin(origin, path, defaults)
}

/**
 * 根据数据源获取布尔值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export const getBoolean = (origin: any, path: string, defaults = false) => {
  return getDataByOrigin(origin, path, defaults)
}
