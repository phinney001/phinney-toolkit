import { hasChild } from '../judgment'

/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options handleValue 处理字段值方法
 */
export const arrayToObject = (
  arr: any[],
  options: any,
): any => {
  const {
    label = 'label',
    value = 'value',
    handleValue,
  } = options || {}
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
 * @param options label 字段名
 * @param options value 字段值
 * @param options hasAll 是否返回其他字段数据
 */
export const arrayToOptions = (
  arr: any[],
  options: any,
): any => {
  const {
    label = 'label',
    value = 'value',
    hasAll = false,
  } = options || {}
  return arr?.map((m: any) => ({
    ...(hasAll ? m : {}),
    label: m[label],
    value: m[value]
  }))
}

/**
 * 树形数组转对象（用户表格过滤下拉框）
 * @param arr 树形数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options children 子级字段名称
 * @param options name 初始拼接名称
 * @param options linker 拼接链接符
 * @param options handleValue 处理字段值方法
 */
export const treeToObject = (
  arr: any[],
  options: any,

): any => {
  const {
    label = 'label',
    value = 'value',
    children = 'children',
    name = '',
    linker = '/',
    handleValue,
  } = options || {}
  return arr?.reduce((t: any, c: any) => {
    const newLabel = name + c[label]
    return {
      ...t,
      [c[value]]: handleValue ? handleValue?.(c) : (linker === false ? c[label] : newLabel),
      ...(c.children instanceof Array
        ? treeToObject(c[children], {
          label,
          value,
          children,
          name: newLabel + linker,
          linker,
        })
        : {})
    }
  }, {})
}

/**
 * 树形数组数据转换为下拉框使用数据
 * @param arr 树形数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options children 子级字段名称 
 * @param options hasAll 是否返回其他字段数据
 */
export const treeToOptions = (
  arr: any[],
  options: any,
): any => {
  const {
    label = 'label',
    value = 'value',
    children = 'children',
    hasAll = false,
  } = options || {}
  return arr?.reduce((t: any, c: any) => {
    return [
      ...t,
      {
        ...(hasAll ? c : {}),
        value: c[value],
        label: c[label],
        children: c[children] instanceof Array
          ? treeToOptions(c[children], {
            label,
            value,
            children,
            hasAll,
          })
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
export const QMapTransBMap = ({ lng, lat }: {lng: number, lat: number}) => {
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
export const BMapTransQMap = ({ lng, lat }: {lng: number, lat: number}) => {
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
 * @param options value 子级节点id
 * @param options valueName 子级节点id名称
 * @param options childrenName 子级字段名称
 */
export const getValueListByChildId = (list: any[], options: any): any[] => {
  const {
    value,
    valueName = 'value',
    childrenName = 'children',
  } = options || {}
  if (list instanceof Array) {
    return list.reduce((t, c) => {
      if (c[valueName] === value || hasChild(c[childrenName], {
        value,
        valueName,
        childrenName,
      })) {
        return [
          ...t,
          c[valueName],
          ...(getValueListByChildId(c[childrenName], {
            value,
            valueName,
            childrenName,
          }))
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
 * @param options 其他参数
 */
export const transitData = (
  data: any[],
  valueType = 'array',
  options: any
) => {
  if (data instanceof Array) {
    if (valueType === 'array') {
      return arrayToOptions(data, options)
    }
    if (valueType === 'object') {
      return arrayToObject(data, options)
    }
    if (valueType === 'treeArray') {
      return treeToOptions(data, options)
    }
    if (valueType === 'treeObject') {
      return treeToObject(data, options)
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
