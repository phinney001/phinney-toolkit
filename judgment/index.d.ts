/**
 * 判断对象
 * @param data 数据
 * @param containNull 是否包含null
 */
export declare const isObject: (data: any, containNull?: boolean) => data is any;
/**
 * 判断空对象
 * @param data 数据
 */
export declare const isEmptyObject: (data: any) => data is any;
/**
 * 判断非空对象
 * @param data 数据
 */
export declare const isNotEmptyObject: (data: any) => data is any;
/**
 * 判断数组
 * @param data 数据
 */
export declare const isArray: (data: any) => data is any[];
/**
 * 判断空数组
 * @param data 数据
 */
export declare const isEmptyArray: (data: any) => data is any[];
/**
 * 判断非空数组
 * @param data 数据
 */
export declare const isNotEmptyArray: (data: any) => data is any[];
/**
 * 判断字符串
 * @param data 数据
 */
export declare const isString: (data: any) => boolean;
/**
 * 判断空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export declare const isEmptyString: (data: any, trim?: boolean) => data is string;
/**
 * 判断非空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export declare const isNotEmptyString: (data: any, trim?: boolean) => data is string;
/**
 * 判断数值
 * @param data 数据
 * @param containNaN 是否包含NaN
 */
export declare const isNumber: (data: any, containNaN?: boolean) => data is number;
/**
 * 判断布尔值
 * @param data 数据
 */
export declare const isBoolean: (data: any) => data is boolean;
/**
 * 判断undefined
 * @param data 数据
 */
export declare const isUndefined: (data: any) => boolean;
/**
 * 判断null
 * @param data 数据
 */
export declare const isNull: (data: any) => boolean;
/**
 * 判断是null或undefined
 * @param data 数据
 */
export declare const isNullOrUndefined: (data: any) => boolean;
/**
 * 判断不是null或undefined
 * @param data 数据
 */
export declare const isNotNullOrUndefined: (data: any) => boolean;
/**
 * 判断函数
 * @param data 数据
 */
export declare const isFunction: (data: any) => data is Function;
/**
 * 判断是否含有某个子节点
 * @param list 树形数据列表
 * @param options value 节点id名称
 * @param options valueName 节点id名称
 * @param options childrenName 子级字段名称
 */
export declare const hasChild: (list: any[], options?: any) => boolean;
