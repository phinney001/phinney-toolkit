import { hasChild } from '../judgment'

/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param label 字段名
 * @param value 字段值
 * @param handleValue 处理字段值方法
 */
export const arrayToObject = (
  arr: any[],
  label = 'label',
  value = 'value',
  handleValue?: Function
): any => {
  return arr?.reduce((t: any, c: any) => {
    return {
      ...t,
      [c[value]]: handleValue ? handleValue?.(c) : c[label]
    }
  }, {})
}

/**
 * 对象数组数据转换为下拉框使用数据
 * @param arr 对象数组数据
 * @param label 字段名
 * @param value 字段值
 * @param hasAll 是否返回其他字段数据
 */
export const arrayToOptions = (
  arr: any[],
  label = 'label',
  value = 'value',
  hasAll = false,
): any => {
  return arr?.map((m: any) => ({
    ...(hasAll ? m : {}),
    label: m[label],
    value: m[value]
  }))
}

/**
 * 树形数组转对象（用户表格过滤下拉框）
 * @param arr 树形数组数据
 * @param label 字段名
 * @param value 字段值
 * @param children 子级字段名称
 * @param name 初始拼接名称
 * @param linker 拼接链接符
 * @param handleValue 处理字段值方法
 */
export const treeToObject = (
  arr: any[],
  label = 'label',
  value = 'value',
  children = 'children',
  name = '',
  linker: string | boolean = '/',
  handleValue?: Function
): any => {
  return arr?.reduce((t: any, c: any) => {
    const newLabel = name + c[label]
    return {
      ...t,
      [c[value]]: handleValue ? handleValue?.(c) : (linker === false ? c[label] : newLabel),
      ...(c.children instanceof Array
        ? treeToObject(c[children], label, value, children, newLabel + linker, linker)
        : {})
    }
  }, {})
}

/**
 * 树形数组数据转换为下拉框使用数据
 * @param arr 树形数组数据
 * @param label 字段名
 * @param value 字段值
 * @param children 子级字段名称 
 * @param hasAll 是否返回其他字段数据
 */
export const treeToOptions = (
  arr: any[],
  label = 'label',
  value = 'value',
  children = 'children',
  hasAll = false,
): any => {
  return arr?.reduce((t: any, c: any) => {
    return [
      ...t,
      {
        ...(hasAll ? c : {}),
        value: c[value],
        label: c[label],
        children: c[children] instanceof Array
          ? treeToOptions(c[children], label, value, children, hasAll)
          : null
      },
    ]
  }, [])
}

/**
 * 经纬度转换-腾讯地图转百度地图
 * @param lng 经度
 * @param lat 纬度
 */
export const QMapTransBMap = (lng: number, lat: number) => {
  if (!lng || !lat) return { lng, lat }
  const x = parseFloat(lng.toString())
  const y = parseFloat(lat.toString())
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI)
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI)

  return {
    lng: Number((z * Math.cos(theta) + 0.0065).toFixed(5)),
    lat: Number((z * Math.sin(theta) + 0.006).toFixed(5))
  }
}

/**
 * 经纬度转换-百度地图转腾讯地图
 * @param lng 经度
 * @param lat 纬度
 */
export const BMapTransQMap = (lng: number, lat: number) => {
  if (!lng || !lat) return { lng, lat }
  const x = parseFloat(lng.toString()) - 0.0065
  const y = parseFloat(lat.toString()) - 0.006
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI)
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI)

  return {
    lng: Number((z * Math.cos(theta)).toFixed(7)),
    lat: Number((z * Math.sin(theta)).toFixed(7))
  }
}

/**
 * 根据子节点id获取含有父级节点id列表
 * @param list 树形数据列表
 * @param value 子级节点id
 * @param valueName 子级节点id名称
 * @param childrenName 子级字段名称
 */
export const getValueListByChildId = (list: any[], value: any, valueName = 'value', childrenName = 'children'): any[] => {
  if (list instanceof Array) {
    return list.reduce((t, c) => {
      if (c[valueName] === value || hasChild(c[childrenName], value)) {
        return [
          ...t,
          c[valueName],
          ...(getValueListByChildId(c[childrenName], value, valueName, childrenName))
        ]
      }
      return t
    }, [])
  }
  return []
}

/**
 * 数据类型处理中转
 * @param data 数组数据
 * @param valueType 返回数据类型
 * @param otherArgs 其他参数
 */
export const transitData = (
  data: any[],
  valueType = 'array',
  ...otherArgs: any[]
) => {
  if (data instanceof Array) {
    if (valueType === 'array') {
      return arrayToOptions(data, ...otherArgs)
    }
    if (valueType === 'object') {
      return arrayToObject(data, ...otherArgs)
    }
    if (valueType === 'treeArray') {
      return treeToOptions(data, ...otherArgs)
    }
    if (valueType === 'treeObject') {
      return treeToObject(data, ...otherArgs)
    }
  }
  if (['array', 'treeArray'].includes(valueType)) {
    return []
  }
  if (['object', 'treeObject', 'treeCoordObject'].includes(valueType)) {
    return {}
  }
  return data
}
