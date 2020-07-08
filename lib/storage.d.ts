/**
 * storage存储
 * @date 2020-07-06
 * @author phinney
 * @version 1.0
 */
export declare class Storage {
    proto: any;
    constructor(proto: any);
    /**
     * 存储数据长度
     * @returns {Number}
     */
    get size(): any;
    /**
     * 存储数据名集合
     * @returns {Array<String>}
     */
    get keys(): Array<string>;
    /**
     * 存储数据值集合
     * @returns {Array<*>}
     */
    get values(): Array<unknown>;
    /**
     * 存储数据键值对集合
     * @returns {Array<{key:value}>}
     */
    get entries(): Array<any>;
    /**
     * 设置数据存储
     * @param {String} key 数据名
     * @param {*} val 数据值
     * @returns {Storage}
     */
    set(key: string, val: unknown): this;
    /**
     * 获取数据存储
     * @param {String} key 数据名
     * @returns {*}
     */
    get(key: string): any;
    /**
     * 是否包含某个数据存储
     * @param {String} key 数据名
     * @returns {Boolean}
     */
    has(key: string): boolean;
    /**
     * 删除数据存储
     * @param {String} key 数据名
     */
    delete(key: string): void;
    /**
     * 清空数据存储
     * @param {Array<String>} except 需要保留的数据存储
     */
    clear(except: Array<string>): void;
    /**
     * 数据存储循环
     * @param {(key, value) => void} cb 回调函数
     */
    forEach(cb: (key: string, value: unknown) => void): void;
}
export declare const local: Storage;
export declare const session: Storage;
