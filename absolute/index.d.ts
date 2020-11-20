/** @title 获取绝对数据类型 */
/**
 * 根据数据源获取数据
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getDataByOrigin: (origin: any, path: string, defaults?: any) => any;
/**
 * 根据数据源获取数组
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getArray: (origin: any, path: string, defaults?: never[]) => any;
/**
 * 根据数据源获取对象
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getObject: (origin: any, path: string, defaults?: {}) => any;
/**
 * 根据数据源获取字符串
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getString: (origin: any, path: string, defaults?: string) => any;
/**
 * 根据数据源获取数值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getNumber: (origin: any, path: string, defaults?: number) => any;
/**
 * 根据数据源获取布尔值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getBoolean: (origin: any, path: string, defaults?: boolean) => any;
/**
 * 根据数据源获取函数
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export declare const getFunction: (origin: any, path: string, defaults?: () => void) => any;
