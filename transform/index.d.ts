/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param label 字段名
 * @param value 字段值
 * @param handleValue 处理字段值方法
 */
export declare const arrayToObject: (arr: any[], label?: string, value?: string, handleValue?: Function | undefined) => any;
/**
 * 对象数组数据转换为下拉框使用数据
 * @param arr 对象数组数据
 * @param label 字段名
 * @param value 字段值
 * @param hasAll 是否返回其他字段数据
 */
export declare const arrayToOptions: (arr: any[], label?: string, value?: string, hasAll?: boolean) => any;
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
export declare const treeToObject: (arr: any[], label?: string, value?: string, children?: string, name?: string, linker?: string | boolean, handleValue?: Function | undefined) => any;
/**
 * 树形数组数据转换为下拉框使用数据
 * @param arr 树形数组数据
 * @param label 字段名
 * @param value 字段值
 * @param children 子级字段名称
 * @param hasAll 是否返回其他字段数据
 */
export declare const treeToOptions: (arr: any[], label?: string, value?: string, children?: string, hasAll?: boolean) => any;
/**
 * 经纬度转换-腾讯地图转百度地图
 * @param lng 经度
 * @param lat 纬度
 */
export declare const QMapTransBMap: (lng: number, lat: number) => {
    lng: number;
    lat: number;
};
/**
 * 经纬度转换-百度地图转腾讯地图
 * @param lng 经度
 * @param lat 纬度
 */
export declare const BMapTransQMap: (lng: number, lat: number) => {
    lng: number;
    lat: number;
};
/**
 * 根据子节点id获取含有父级节点id列表
 * @param list 树形数据列表
 * @param value 子级节点id
 * @param valueName 子级节点id名称
 * @param childrenName 子级字段名称
 */
export declare const getValueListByChildId: (list: any[], value: any, valueName?: string, childrenName?: string) => any[];
