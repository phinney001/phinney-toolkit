"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasChild = exports.isNotNullOrUndefined = exports.isNull = exports.isUndefined = exports.isBoolean = exports.isNumber = exports.isNotEmptyString = exports.isString = exports.isNotEmptyArray = exports.isArray = exports.isNotEmptyObject = exports.isObject = void 0;
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
 * 判断是否是非空对象
 * @param data 数据
 */
exports.isNotEmptyObject = function (data) {
    return exports.isObject(data) && !!(Reflect.ownKeys(data).length);
};
/**
 * 判断是否是数组
 * @param data 数据
 */
exports.isArray = function (data) {
    return data instanceof Array;
};
/**
 * 判断是否是非空数组
 * @param data 数据
 */
exports.isNotEmptyArray = function (data) {
    return exports.isArray(data) && !!(data.length);
};
/**
 * 判断是否是字符串
 * @param data 数据
 */
exports.isString = function (data) {
    return typeof data === 'string';
};
/**
 * 判断是否是空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
exports.isNotEmptyString = function (data, trim) {
    if (trim === void 0) { trim = true; }
    if (exports.isString(data)) {
        return true;
    }
    if (trim) {
        return data.trim() !== '';
    }
    return data !== '';
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
 * 判断是否不是null或undefined
 * @param data 数据
 */
exports.isNotNullOrUndefined = function (data) {
    return !exports.isNull(data) && !exports.isUndefined(data);
};
/**
 * 判断是否含有某个子节点
 * @param list 树形数据列表
 * @param value 节点id名称
 * @param valueName 节点id名称
 * @param childrenName 子级字段名称
 */
exports.hasChild = function (list, value, valueName, childrenName) {
    if (valueName === void 0) { valueName = 'value'; }
    if (childrenName === void 0) { childrenName = 'children'; }
    if (list instanceof Array) {
        return list.some(function (s) {
            if (s[valueName] !== value && s[childrenName]) {
                return exports.hasChild(s[childrenName], value);
            }
            return s[valueName] === value;
        });
    }
    return false;
};
