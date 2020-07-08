"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyString = exports.isNull = exports.isUndefined = exports.isBoolean = exports.isString = exports.isNumber = exports.isArray = exports.isObject = void 0;
/**
 * 判断是否是对象
 * @param data 数据
 * @param containNull 是否包含null
 */
exports.isObject = function (data, containNull) {
    if (containNull === void 0) { containNull = false; }
    if (containNull) {
        return typeof data === 'object';
    }
    return typeof data === 'object' && data !== null;
};
/**
 * 判断是否是数组
 * @param data 数据
 */
exports.isArray = function (data) {
    return data instanceof Array;
};
/**
 * 判断是否是数值
 * @param data 数据
 * @param containNaN 是否包含NaN
 */
exports.isNumber = function (data, containNaN) {
    if (containNaN === void 0) { containNaN = false; }
    if (containNaN) {
        return typeof data === 'number';
    }
    return typeof data === 'number' && !isNaN(data);
};
/**
 * 判断是否是字符串
 * @param data 数据
 */
exports.isString = function (data) {
    return typeof data === 'string';
};
/**
 * 判断是否是布尔值
 * @param data 数据
 */
exports.isBoolean = function (data) {
    return typeof data === 'boolean';
};
/**
 * 判断是否是undefined
 * @param data 数据
 */
exports.isUndefined = function (data) {
    return data === void 0;
};
/**
 * 判断是否是null
 * @param data 数据
 */
exports.isNull = function (data) {
    return data === null;
};
/**
 * 判断是否是空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
exports.isEmptyString = function (data, trim) {
    if (trim === void 0) { trim = true; }
    if (exports.isString(data)) {
        return false;
    }
    if (trim) {
        return data.trim() === '';
    }
    return data === '';
};
