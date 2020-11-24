/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options handleValue 处理字段值方法
 */
export declare const arrayToObject: (arr: any[], options?: any) => any;
/**
 * 对象数组数据转换为下拉框使用数据
 * @param arr 对象数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options hasAll 是否返回其他字段数据
 */
export declare const arrayToOptions: (arr: any[], options?: any) => any;
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
export declare const treeToObject: (arr: any[], options?: any) => any;
/**
 * 树形数组数据转换为下拉框使用数据
 * @param arr 树形数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options children 子级字段名称
 * @param options hasAll 是否返回其他字段数据
 */
export declare const treeToOptions: (arr: any[], options?: any) => any;
/**
 * 数据类型处理中转
 * @param data 数组数据
 * @param valueType 返回数据类型
 * @param options 其他参数
 */
export declare const transitData: (data: any[], valueType?: string, options?: any) => any;
/**
 * 经纬度转换-腾讯地图转百度地图
 * @param lng 经度
 * @param lat 纬度
 */
export declare const QMapTransBMap: ({ lng, lat }: {
    lng: number;
    lat: number;
}) => {
    lng: number;
    lat: number;
};
/**
 * 经纬度转换-百度地图转腾讯地图
 * @param lng 经度
 * @param lat 纬度
 */
export declare const BMapTransQMap: ({ lng, lat }: {
    lng: number;
    lat: number;
}) => {
    lng: number;
    lat: number;
};
/**
 * 根据子节点id获取含有父级节点id列表
 * @param list 树形数据列表
 * @param options value 子级节点id
 * @param options valueName 子级节点id名称
 * @param options childrenName 子级字段名称
 */
export declare const getValueListByChildId: (list: any[], options?: any) => any[];
/**
 * 设置数值精度
 * @param num 数字
 * @param options precision 精度
 * @param options rounding 是否四舍五入
 * @param options handle 数据自处理方法
 */
export declare const precision: (num: any, options?: any) => any;
/**
 * 对象合并
 * @param origin 数据源
 * @param newData 新数据
 */
export declare const objectMerge: (origin?: any, newData?: any) => any;
/**
 * 数据合计
 * @param origin 数据源
 * @param key 要累计的字段或处理方法
 * @param initVal 初始值
 */
export declare const sum: (origin?: any[], key?: string | Function | undefined, initVal?: number) => any;
