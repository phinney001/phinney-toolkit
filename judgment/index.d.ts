/**
 * 判断是否是对象
 * @param data 数据
 * @param containNull 是否包含null
 */
export declare const isObject: (data: any, containNull?: boolean) => boolean;
/**
 * 判断是否是非空对象
 * @param data 数据
 */
export declare const isNotEmptyObject: (data: any) => boolean;
/**
 * 判断是否是数组
 * @param data 数据
 */
export declare const isArray: (data: any) => boolean;
/**
 * 判断是否是非空数组
 * @param data 数据
 */
export declare const isNotEmptyArray: (data: any) => boolean;
/**
 * 判断是否是字符串
 * @param data 数据
 */
export declare const isString: (data: any) => boolean;
/**
 * 判断是否是空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export declare const isNotEmptyString: (data: any, trim?: boolean) => boolean;
/**
 * 判断是否是数值
 * @param data 数据
 * @param containNaN 是否包含NaN
 */
export declare const isNumber: (data: any, containNaN?: boolean) => boolean;
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
 * 判断是否不是null或undefined
 * @param data 数据
 */
export declare const isNotNullOrUndefined: (data: any) => boolean;
/**
 * 判断是否含有某个子节点
 * @param list 树形数据列表
 * @param value 节点id名称
 * @param valueName 节点id名称
 * @param childrenName 子级字段名称
 */
export declare const hasChild: (list: any[], value: any, valueName?: string, childrenName?: string) => boolean;
