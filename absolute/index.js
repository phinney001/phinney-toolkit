/** @title 获取绝对数据类型 */
import { isArray, isBoolean, isNumber, isObject, isString, isFunction, isUndefined } from '../judgment';
/**
 * 根据数据源获取数据
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getDataByOrigin = function (origin, path, defaults) {
    if (!origin || !isString(path))
        return defaults;
    var result = path.split('.').reduce(function (t, c) {
        if (t === void 0) { t = {}; }
        return t === null || t === void 0 ? void 0 : t[c];
    }, origin);
    return result || defaults;
};
/**
 * 根据数据源获取数组
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getArray = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = []; }
    var res = isUndefined(path) ? origin : getDataByOrigin(origin, path || '', defaults);
    return isArray(res) ? res : defaults;
};
/**
 * 根据数据源获取对象
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getObject = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = {}; }
    var res = isUndefined(path) ? origin : getDataByOrigin(origin, path || '', defaults);
    return isObject(res) ? res : defaults;
};
/**
 * 根据数据源获取字符串
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getString = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = ''; }
    var res = isUndefined(path) ? origin : getDataByOrigin(origin, path || '', defaults);
    return isString(res) ? res : ((res === null || res === void 0 ? void 0 : res.toString()) || defaults);
};
/**
 * 根据数据源获取数值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getNumber = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = 0; }
    var res = isUndefined(path) ? origin : getDataByOrigin(origin, path || '', defaults);
    return isNumber(res) ? res : (Number(res) || defaults);
};
/**
 * 根据数据源获取布尔值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getBoolean = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = false; }
    var res = isUndefined(path) ? origin : getDataByOrigin(origin, path || '', defaults);
    return isBoolean(res) ? res : (Boolean(res) || defaults);
};
/**
 * 根据数据源获取函数
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
export var getFunction = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = function () { }; }
    var res = isUndefined(path) ? origin : getDataByOrigin(origin, path || '', defaults);
    return isFunction(res) ? res : defaults;
};
