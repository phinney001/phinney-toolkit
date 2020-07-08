/**
 * 判断是否是对象
 * @param data 数据
 * @param containNull 是否包含null
 */
export declare const isObject: (data: any, containNull?: boolean) => boolean;
/**
 * 判断是否是数组
 * @param data 数据
 */
export declare const isArray: (data: any) => boolean;
/**
 * 判断是否是数值
 * @param data 数据
 * @param containNaN 是否包含NaN
 */
export declare const isNumber: (data: any, containNaN?: boolean) => boolean;
/**
 * 判断是否是字符串
 * @param data 数据
 */
export declare const isString: (data: any) => boolean;
/**
 * 判断是否是布尔值
 * @param data 数据
 */
export declare const isBoolean: (data: any) => boolean;
/**
 * 判断是否是undefined
 * @param data 数据
 */
export declare const isUndefined: (data: any) => boolean;
/**
 * 判断是否是null
 * @param data 数据
 */
export declare const isNull: (data: any) => boolean;
/**
 * 判断是否是空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export declare const isEmptyString: (data: any, trim?: boolean) => boolean;
