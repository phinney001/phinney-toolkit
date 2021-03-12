import { getNumber, getObject, getString } from '../absolute'
import { hasChild, isArray, isFunction, isNumber, isObject, isString } from '../judgment'

/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options handleValue 处理字段值方法
 */
export const arrayToObject = (
  arr: any[],
  options?: any,
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
  options?: any,
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
  options?: any,
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
          handleValue
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
  options?: any,
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
 * 数据类型处理中转
 * @param data 数组数据
 * @param valueType 返回数据类型
 * @param options 其他参数
 */
export const transitData = (
  data: any[],
  valueType = 'array',
  options?: any
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
export const getValueListByChildId = (list: any[], options?: any): any[] => {
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
 * 设置数值精度
 * @param num 数字
 * @param options precision 精度
 * @param options rounding 是否四舍五入
 * @param options handle 数据自处理方法
 */
export const precision = (num: any, options?: any) => {
  const {
    precision = 2,
    rounding = true,
    handle
  } = options || {}
  num = Number(num)
  if (isNumber(num)) {
    let resultNum = handle ? handle?.(num) : num
    if (rounding) {
      return resultNum.toFixed(precision)
    }
    resultNum = resultNum.toStirng().split('.').map((m: string, mIndex: number) => {
      if (mIndex) return m.substring(0, precision)
      return m
    }).join('.')
    return Number(resultNum)
  }
  return num
}

/**
 * 对象合并
 * @param origin 数据源
 * @param newData 新数据
 */
export const objectMerge = (origin: any = {}, newData: any = {}) => {
  if (isObject(origin) && isObject(newData)) {
    const keys = [...new Set(Reflect.ownKeys(origin)
      .concat(Reflect.ownKeys(newData))
    )]
    return keys.reduce((map: any, key: any) => {
      if (isObject(origin[key]) && isObject(newData[key])) {
        map[key] = objectMerge(origin[key], newData[key])
      } else {
        map[key] = newData[key] ?? origin[key]
      }
      return map
    }, {})
  }
  return {
    ...origin,
    ...newData
  }
}

/**
 * 数据合计
 * @param origin 数据源
 * @param key 要累计的字段或处理方法
 * @param initVal 初始值
 */
export const sum = (origin: any[] = [], key?: string | ((data: any[], index: number) => any), initVal: any = 0) => {
  if (isArray(origin)) {
    return origin.reduce((total, current, index) => {
      const stringKey = getString(key)
      if (isNumber(initVal)) {
        return total + getNumber(
          key
          ? isFunction(key) ? key(current, index) : current[stringKey]
          : current
        )
      }
      if (isString(initVal)) {
        return total + getString(
          key
          ? isFunction(key) ? key(current, index) : current[stringKey]
          : current
        )
      }
      if (isArray(initVal)) {
        return [
          ...total,
          ...(isFunction(key) ? key(current, index) : [current[stringKey]])
        ]
      }
      if (isObject(initVal) && !isArray(initVal)) {
        return {
          ...total,
          ...(isFunction(key) ? key(current, index) : { [stringKey]: current[stringKey]})
        }
      }
      return total + current
    }, initVal)
  }
  return initVal
}

/**
 * 根据取余获取数组数据项
 * @param arr 数组
 * @param index 序列号
 */
export const getItemBySpare = (arr: any[], index: number) => {
  if (!isArray(arr)) {
    throw new Error('arr必须是数组！')
  }
  if (!isNumber(index)) {
    throw new Error('index必须是数字！')
  }
  return arr[index % arr.length]
}

/**
 * 对象转下拉框数据
 * @param obj 对象
 */
export const objectToOptions = (obj: any): any[] => {
  return Object.entries(getObject(obj)).map(([value, label]: any) => ({
    value,
    label,
  }))
}
