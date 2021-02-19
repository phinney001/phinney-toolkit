/**
 * storage存储
 * @date 2020-07-06
 * @author phinney
 * @version 1.0
 */
export declare class Storage {
    proto: any;
    constructor(proto: any);
    get size(): number;
    get keys(): Array<string>;
    get values(): Array<any>;
    get entries(): Array<any>;
    /**
     * 设置数据存储
     * @param key 数据名
     * @param val 数据值
     */
    set(key: string, val: any): Storage;
    /**
     * 获取数据存储
     * @param key 数据名
     */
    get(key: string): any;
    /**
     * 是否包含某个数据存储
     * @param key 数据名
     */
    has(key: string): boolean;
    /**
     * 删除数据存储
     * @param key 数据名
     */
    delete(key: string): void;
    /**
     * 清空数据存储
     * @param except 需要保留的数据存储
     */
    clear(except?: Array<string>): void;
    /**
     * 数据存储循环
     * @param cb 回调函数
     */
    forEach(cb: (key: string, value: any) => void): void;
}
export declare const local: Storage;
export declare const session: Storage;
