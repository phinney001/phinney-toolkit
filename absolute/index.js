"use strict";
/** @title 获取绝对数据类型 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoolean = exports.getNumber = exports.getString = exports.getObject = exports.getArray = exports.getDataByOrigin = void 0;
/**
 * 根据数据源获取数据
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
exports.getDataByOrigin = function (origin, path, defaults) {
    if (!origin || typeof path !== 'string')
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
exports.getArray = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = []; }
    return exports.getDataByOrigin(origin, path, defaults);
};
/**
 * 根据数据源获取对象
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
exports.getObject = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = {}; }
    return exports.getDataByOrigin(origin, path, defaults);
};
/**
 * 根据数据源获取字符串
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
exports.getString = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = ''; }
    return exports.getDataByOrigin(origin, path, defaults);
};
/**
 * 根据数据源获取数值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
exports.getNumber = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = 0; }
    return exports.getDataByOrigin(origin, path, defaults);
};
/**
 * 根据数据源获取布尔值
 * @param origin 数据源
 * @param path 数据路径
 * @param defaults 默认返回值
 */
exports.getBoolean = function (origin, path, defaults) {
    if (defaults === void 0) { defaults = false; }
    return exports.getDataByOrigin(origin, path, defaults);
};
