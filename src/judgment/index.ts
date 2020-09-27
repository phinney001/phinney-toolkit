/**
 * 判断是否是对象
 * @param data 数据
 * @param containNull 是否包含null
 */
export const isObject = (data: any, containNull = false) => {
  if (containNull) {
    return typeof data === 'object'
  }
  return typeof data === 'object' && data !== null
}

/**
 * 判断是否是非空对象
 * @param data 数据
 */
export const isNotEmptyObject = (data: any) => {
  return isObject(data) && !!(Reflect.ownKeys(data).length)
}

/**
 * 判断是否是数组
 * @param data 数据
 */
export const isArray = (data: any) => {
  return data instanceof Array
}

/**
 * 判断是否是非空数组
 * @param data 数据
 */
export const isNotEmptyArray = (data: any) => {
  return isArray(data) && !!(data.length)
}

/**
 * 判断是否是字符串
 * @param data 数据
 */
export const isString = (data: any) => {
  return typeof data === 'string'
}

/**
 * 判断是否是空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export const isNotEmptyString = (data: any, trim = true) => {
  if (isString(data)) {
    return true
  }
  if (trim) {
    return data.trim() !== ''
  }
  return data !== ''
}

/**
 * 判断是否是数值
 * @param data 数据
 * @param containNaN 是否包含NaN
 */
export const isNumber = (data: any, containNaN = false) => {
  if (containNaN) {
    return typeof data === 'number'
  }
  return typeof data === 'number' && !isNaN(data)
}

/**
 * 判断是否是布尔值
 * @param data 数据
 */
export const isBoolean = (data: any) => {
  return typeof data === 'boolean'
}

/**
 * 判断是否是undefined
 * @param data 数据
 */
export const isUndefined = (data: any) => {
  return data === void 0
}

/**
 * 判断是否是null
 * @param data 数据
 */
export const isNull = (data: any) => {
  return data === null
}

/**
 * 判断是否不是null或undefined
 * @param data 数据
 */
export const isNotNullOrUndefined = (data: any) => {
  return !isNull(data) && !isUndefined(data)
}

/**
 * 判断是否含有某个子节点
 * @param list 树形数据列表
 * @param value 节点id名称
 * @param valueName 节点id名称
 * @param childrenName 子级字段名称
 */
export const hasChild = (list: any[], value: any, valueName = 'value', childrenName = 'children'): boolean => {
  if (list instanceof Array) {
    return list.some((s: any) => {
      if (s[valueName] !== value && s[childrenName]) {
        return hasChild(s[childrenName], value)
      }
      return s[valueName] === value
    })
  }
  return false
}
