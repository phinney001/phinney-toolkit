/** @title echarts图表快捷方法 */

import { getString } from '../absolute'
import { isArray, isObject, isString } from '../judgment'
import { objectMerge } from '../transform'
import { AxisOptions, AxisTick, GridOptions, LabelOption, LineOption, ShadowOption, TextOption, TooltipOptions } from './interface'

/**
 * 获取文本配置
 * @param options 文本配置
 */
export const getTextOption = (options?: TextOption | boolean | string) => {
  // 设置文本
  if (isString(options)) {
    return { color: options }
  }
  if (isObject(options)) {
    const { color, size: fontSize, ...other } = options as any
    return objectMerge({
      ...(color && { color }),
      ...(fontSize && { fontSize }),
    }, other)
  }

  return {}
}

/**
 * 获取标签配置
 * @param options 标签配置
 */
export const getLabelOption = (options?: LabelOption | boolean | string) => {
  // 设置标签
  if (options === false) {
    return { show: false }
  }
  if (isString(options)) {
    return { color: options }
  }
  if (isObject(options)) {
    const { color, size: fontSize, ...other } = options as any
    return objectMerge({
      ...(color && { color }),
      ...(fontSize && { fontSize }),
    }, other)
  }

  return {}
}

/**
 * 获取线配置
 * @param options 线配置
 */
export const getLineOption = (options?: LineOption | boolean | string) => {
  // 设置轴线
  if (options === false) {
    return { show: false }
  }
  if (isString(options)) {
    return { color: options }
  }
  if (isObject(options)) {
    const { color, type, ...other } = options as any
    return objectMerge({
      ...(color && { color }),
      ...(type && { type }),
    }, other)
  }

  return {}
}

/**
 * 获取阴影配置
 * @param options 阴影配置
 */
export const getShadowOption = (options?: ShadowOption | boolean | string) => {
  // 设置文本
  if (isString(options)) {
    return { color: options }
  }
  if (isObject(options)) {
    const { color, ...other } = options as any
    return objectMerge({
      ...(color && { color }),
    }, other)
  }

  return {}
}

/**
 * 获取刻度线配置
 * @param options 刻度线配置
 */
export const getAxisTick = (options?: AxisTick | boolean | string) => {
  // 设置刻度线
  if (options === false) {
    return { show: false }
  }
  if (isString(options)) {
    return { lineStyle: { color: options } }
  }
  if (isObject(options)) {
    const {
      color,
      size: fontSize,
      center: alignWithLabel,
      ...other
    } = options as any
    return objectMerge({
      ...(color && { lineStyle: { color } }),
      ...(fontSize && { fontSize }),
      ...(alignWithLabel && { alignWithLabel }),
    }, other)
  }

  return {}
}


/**
 * 获取轴线配置
 * @param options 轴线配置
 */
export const getAxisLine = (options?: LineOption | boolean | string) => {
  // 设置轴线
  if (options === false) {
    return { show: false }
  }
  if (isString(options)) {
    return { lineStyle: { color: options } }
  }
  if (isObject(options)) {
    const { color, type, ...other } = options as any
    return objectMerge({
      ...((color || type) &&
      {
        lineStyle: getLineOption({ color, type })
      }
      ),
    }, other)
  }

  return {}
}

/**
 * 获取轴线配置
 * @param options.label 轴线标签
 * @param options.tick 轴线刻度线
 * @param options.line 轴线
 * @param options.split 分隔线
 */
export const getAxis = (options?: AxisOptions) => {
  // 不显示轴线
  if (!options) return { show: false }

  const { label, tick, line, split, ...other } = options || {}

  // 返回配置
  return objectMerge({
    ...(Reflect.has(options, 'label') && { axisLabel: getLabelOption(label) }),
    ...(Reflect.has(options, 'tick') && { axisTick: getAxisTick(tick) }),
    ...(Reflect.has(options, 'line') && { axisLine: getAxisLine(line) }),
    ...(Reflect.has(options, 'split')&& { splitLine: getAxisLine(split) }),
  }, other)
}

/**
 * 获取formatter方法
 * @param dealFunc 处理方法
 */
export const getFormatter = (dealFunc?: Function) => {
  if (!dealFunc) return {}

  return (params: any) => {
    if (isArray(params)) {
      return params.reduce((total, current, index) => {
        total += dealFunc?.({
          ...current,
          index,
          content: `${(current?.axisValue && !index)
            ? (current?.axisValue + '<br>')
            : ''
            }${getString(current, 'marker')
            }${getString(current, 'seriesName')
            }: ${getString(current, 'value', '-')
            }`
        })
        return total
      }, '')
    }
    return dealFunc?.({
      ...params,
      content: `${getString(params, 'marker')
        }${getString(params, 'name')
        }: ${getString(params, 'value', '-')
        }`
    })
  }
}

/**
 * 获取初始tooltip提示框
 * @param options tooltip配置
 */
export const getTooltip = (options?: TooltipOptions) => {
  // 不显示提示框
  if (!options) return { show: false }

  const {
    format,
    color,
    size,
    background: backgroundColor,
    line,
    shadow,
    cross,
    ...other
  } = options || {}

  if ([line, cross, shadow].filter(f => f).length > 1) {
    throw new Error('line、shadow和cross只能选一个！')
  }

  return objectMerge({
    ...(format && { formatter: getFormatter(format) }),
    ...((color || size) &&
    {
      textStyle: getTextOption({ color, size })
    }
    ),
    ...(line &&  {
      axisPointer: {
        type: 'line',
        lineStyle: getLineOption(line)
      }
    }),
    ...(shadow &&  {
      axisPointer: {
        type: 'shadow',
        shadowStyle: getShadowOption(shadow)
      }
    }),
    ...(cross &&  {
      axisPointer: {
        type: 'cross',
        crossStyle: getLineOption(cross)
      }
    }),
    ...(backgroundColor && { backgroundColor }),
  }, other)
}

/**
 * 获取初始grid配置
 * @param options grid配置
 */
export const getGrid = (options?: GridOptions) => {
  return {
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
    ...options
  }
}
