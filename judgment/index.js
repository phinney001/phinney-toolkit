/**
 * 判断对象
 * @param data 数据
 * @param containNull 是否包含null
 */
export var isObject = function (data, containNull) {
    if (containNull === void 0) { containNull = false; }
    if (containNull) {
        return typeof data === 'object';
    }
    return typeof data === 'object' && data !== null;
};
/**
 * 判断空对象
 * @param data 数据
 */
export var isEmptyObject = function (data) {
    return isObject(data) && !Boolean(Reflect.ownKeys(data).length);
};
/**
 * 判断非空对象
 * @param data 数据
 */
export var isNotEmptyObject = function (data) {
    return isObject(data) && !!(Reflect.ownKeys(data).length);
};
/**
 * 判断数组
 * @param data 数据
 */
export var isArray = function (data) {
    return data instanceof Array;
};
/**
 * 判断空数组
 * @param data 数据
 */
export var isEmptyArray = function (data) {
    return isArray(data) && !Boolean(data.length);
};
/**
 * 判断非空数组
 * @param data 数据
 */
export var isNotEmptyArray = function (data) {
    return isArray(data) && !!(data.length);
};
/**
 * 判断字符串
 * @param data 数据
 */
export var isString = function (data) {
    return typeof data === 'string';
};
/**
 * 判断空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export var isEmptyString = function (data, trim) {
    if (trim === void 0) { trim = true; }
    if (isString(data) && trim) {
        return data.trim() === '';
    }
    return data === '';
};
/**
 * 判断非空字符串
 * @param data 数据
 * @param trim 是否去除前后空字符串判断
 */
export var isNotEmptyString = function (data, trim) {
    if (trim === void 0) { trim = true; }
    return !isEmptyString(data, trim);
};
/**
 * 判断数值
 * @param data 数据
 * @param containNaN 是否包含NaN
 */
export var isNumber = function (data, containNaN) {
    if (containNaN === void 0) { containNaN = false; }
    if (containNaN) {
        return typeof data === 'number';
    }
    return typeof data === 'number' && !isNaN(data);
};
/**
 * 判断布尔值
 * @param data 数据
 */
export var isBoolean = function (data) {
    return typeof data === 'boolean';
};
/**
 * 判断undefined
 * @param data 数据
 */
export var isUndefined = function (data) {
    return data === void 0;
};
/**
 * 判断null
 * @param data 数据
 */
export var isNull = function (data) {
    return data === null;
};
/**
 * 判断是null或undefined
 * @param data 数据
 */
export var isNullOrUndefined = function (data) {
    return isNull(data) || isUndefined(data);
};
/**
 * 判断不是null或undefined
 * @param data 数据
 */
export var isNotNullOrUndefined = function (data) {
    return !isNull(data) && !isUndefined(data);
};
/**
 * 判断函数
 * @param data 数据
 */
export var isFunction = function (data) {
    return typeof data === 'function';
};
/**
 * 判断是否含有某个子节点
 * @param list 树形数据列表
 * @param options value 节点id名称
 * @param options valueName 节点id名称
 * @param options childrenName 子级字段名称
 */
export var hasChild = function (list, options) {
    var _a = options || {}, value = _a.value, _b = _a.valueName, valueName = _b === void 0 ? 'value' : _b, _c = _a.childrenName, childrenName = _c === void 0 ? 'children' : _c;
    if (list instanceof Array) {
        return list.some(function (s) {
            if (s[valueName] !== value && s[childrenName]) {
                return hasChild(s[childrenName], {
                    value: value,
                    valueName: valueName,
                    childrenName: childrenName,
                });
            }
            return s[valueName] === value;
        });
    }
    return false;
};
