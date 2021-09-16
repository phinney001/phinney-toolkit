var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { getNumber, getObject, getString } from '../absolute';
import { hasChild, isArray, isFunction, isNumber, isObject, isString } from '../judgment';
/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options handleValue 处理字段值方法
 */
export var arrayToObject = function (arr, options) {
    var _a = options || {}, _b = _a.label, label = _b === void 0 ? 'label' : _b, _c = _a.value, value = _c === void 0 ? 'value' : _c, handleValue = _a.handleValue;
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (t, c) {
        var _a;
        return __assign(__assign({}, t), (_a = {}, _a[c[value]] = handleValue ? handleValue === null || handleValue === void 0 ? void 0 : handleValue(c) : c[label], _a));
    }, {});
};
/**
 * 对象数组数据转换为下拉框使用数据
 * @param arr 对象数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options hasAll 是否返回其他字段数据
 */
export var arrayToOptions = function (arr, options) {
    var _a = options || {}, _b = _a.label, label = _b === void 0 ? 'label' : _b, _c = _a.value, value = _c === void 0 ? 'value' : _c, _d = _a.hasAll, hasAll = _d === void 0 ? false : _d;
    return arr === null || arr === void 0 ? void 0 : arr.map(function (m) { return (__assign(__assign({}, (hasAll ? m : {})), { label: m[label], value: m[value] })); });
};
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
export var treeToObject = function (arr, options) {
    var _a = options || {}, _b = _a.label, label = _b === void 0 ? 'label' : _b, _c = _a.value, value = _c === void 0 ? 'value' : _c, _d = _a.children, children = _d === void 0 ? 'children' : _d, _e = _a.name, name = _e === void 0 ? '' : _e, _f = _a.linker, linker = _f === void 0 ? '/' : _f, handleValue = _a.handleValue;
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (t, c) {
        var _a;
        var newLabel = name + c[label];
        return __assign(__assign(__assign({}, t), (_a = {}, _a[c[value]] = handleValue ? handleValue === null || handleValue === void 0 ? void 0 : handleValue(c) : (linker === false ? c[label] : newLabel), _a)), (c[children] instanceof Array
            ? treeToObject(c[children], {
                label: label,
                value: value,
                children: children,
                name: newLabel + linker,
                linker: linker,
                handleValue: handleValue
            })
            : {}));
    }, {});
};
/**
 * 树形数组数据转换为下拉框使用数据
 * @param arr 树形数组数据
 * @param options label 字段名
 * @param options value 字段值
 * @param options children 子级字段名称
 * @param options hasAll 是否返回其他字段数据
 */
export var treeToOptions = function (arr, options) {
    var _a = options || {}, _b = _a.label, label = _b === void 0 ? 'label' : _b, _c = _a.value, value = _c === void 0 ? 'value' : _c, _d = _a.children, children = _d === void 0 ? 'children' : _d, _e = _a.hasAll, hasAll = _e === void 0 ? false : _e;
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (t, c) {
        return __spread(t, [
            __assign(__assign({}, (hasAll ? c : {})), { value: c[value], label: c[label], children: c[children] instanceof Array
                    ? treeToOptions(c[children], {
                        label: label,
                        value: value,
                        children: children,
                        hasAll: hasAll,
                    })
                    : null }),
        ]);
    }, []);
};
/**
 * 数据类型处理中转
 * @param data 数组数据
 * @param valueType 返回数据类型
 * @param options 其他参数
 */
export var transitData = function (data, valueType, options) {
    if (valueType === void 0) { valueType = 'array'; }
    if (data instanceof Array) {
        if (valueType === 'array') {
            return arrayToOptions(data, options);
        }
        if (valueType === 'object') {
            return arrayToObject(data, options);
        }
        if (valueType === 'treeArray') {
            return treeToOptions(data, options);
        }
        if (valueType === 'treeObject') {
            return treeToObject(data, options);
        }
    }
    if (['array', 'treeArray'].includes(valueType)) {
        return [];
    }
    if (['object', 'treeObject', 'treeCoordObject'].includes(valueType)) {
        return {};
    }
    return data;
};
/**
 * 经纬度转换-腾讯地图转百度地图
 * @param lng 经度
 * @param lat 纬度
 */
export var QMapTransBMap = function (_a) {
    var lng = _a.lng, lat = _a.lat;
    if (!lng || !lat)
        return { lng: lng, lat: lat };
    var x = parseFloat(lng.toString());
    var y = parseFloat(lat.toString());
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI);
    return {
        lng: Number((z * Math.cos(theta) + 0.0065).toFixed(5)),
        lat: Number((z * Math.sin(theta) + 0.006).toFixed(5))
    };
};
/**
 * 经纬度转换-百度地图转腾讯地图
 * @param lng 经度
 * @param lat 纬度
 */
export var BMapTransQMap = function (_a) {
    var lng = _a.lng, lat = _a.lat;
    if (!lng || !lat)
        return { lng: lng, lat: lat };
    var x = parseFloat(lng.toString()) - 0.0065;
    var y = parseFloat(lat.toString()) - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI);
    return {
        lng: Number((z * Math.cos(theta)).toFixed(7)),
        lat: Number((z * Math.sin(theta)).toFixed(7))
    };
};
/**
 * 根据子节点id获取含有父级节点id列表
 * @param list 树形数据列表
 * @param options value 子级节点id
 * @param options valueName 子级节点id名称
 * @param options childrenName 子级字段名称
 */
export var getValueListByChildId = function (list, options) {
    var _a = options || {}, value = _a.value, _b = _a.valueName, valueName = _b === void 0 ? 'value' : _b, _c = _a.childrenName, childrenName = _c === void 0 ? 'children' : _c;
    if (list instanceof Array) {
        return list.reduce(function (t, c) {
            if (c[valueName] === value || hasChild(c[childrenName], {
                value: value,
                valueName: valueName,
                childrenName: childrenName,
            })) {
                return __spread(t, [
                    c[valueName]
                ], (getValueListByChildId(c[childrenName], {
                    value: value,
                    valueName: valueName,
                    childrenName: childrenName,
                })));
            }
            return t;
        }, []);
    }
    return [];
};
/**
 * 设置数值精度
 * @param num 数字
 * @param options precision 精度
 * @param options rounding 是否四舍五入
 * @param options handle 数据自处理方法
 */
export var precision = function (num, options) {
    var _a = options || {}, _b = _a.precision, precision = _b === void 0 ? 2 : _b, _c = _a.rounding, rounding = _c === void 0 ? true : _c, handle = _a.handle;
    num = Number(num);
    if (isNumber(num)) {
        var resultNum = handle ? handle === null || handle === void 0 ? void 0 : handle(num) : num;
        if (rounding) {
            return resultNum.toFixed(precision);
        }
        resultNum = resultNum.toStirng().split('.').map(function (m, mIndex) {
            if (mIndex)
                return m.substring(0, precision);
            return m;
        }).join('.');
        return Number(resultNum);
    }
    return num;
};
/**
 * 对象合并
 * @param origin 数据源
 * @param newData 新数据
 */
export var objectMerge = function (origin, newData) {
    if (origin === void 0) { origin = {}; }
    if (newData === void 0) { newData = {}; }
    if (isObject(origin) && isObject(newData)) {
        var keys = __spread(new Set(Reflect.ownKeys(origin)
            .concat(Reflect.ownKeys(newData))));
        return keys.reduce(function (map, key) {
            var _a;
            if (isObject(origin[key]) && isObject(newData[key])) {
                map[key] = objectMerge(origin[key], newData[key]);
            }
            else {
                map[key] = (_a = newData[key]) !== null && _a !== void 0 ? _a : origin[key];
            }
            return map;
        }, {});
    }
    return __assign(__assign({}, origin), newData);
};
/**
 * 数据合计
 * @param origin 数据源
 * @param key 要累计的字段或处理方法
 * @param initVal 初始值
 */
export var sum = function (origin, key, initVal) {
    if (origin === void 0) { origin = []; }
    if (initVal === void 0) { initVal = 0; }
    if (isArray(origin)) {
        return origin.reduce(function (total, current, index) {
            var _a;
            var stringKey = getString(key);
            if (isNumber(initVal)) {
                return total + getNumber(key
                    ? isFunction(key) ? key(current, index) : current[stringKey]
                    : current);
            }
            if (isString(initVal)) {
                return total + getString(key
                    ? isFunction(key) ? key(current, index) : current[stringKey]
                    : current);
            }
            if (isArray(initVal)) {
                return __spread(total, (isFunction(key) ? key(current, index) : [current[stringKey]]));
            }
            if (isObject(initVal) && !isArray(initVal)) {
                return __assign(__assign({}, total), (isFunction(key) ? key(current, index) : (_a = {}, _a[stringKey] = current[stringKey], _a)));
            }
            return total + current;
        }, initVal);
    }
    return initVal;
};
/**
 * 根据取余获取数组数据项
 * @param arr 数组
 * @param index 序列号
 */
export var getItemBySpare = function (arr, index) {
    if (!isArray(arr)) {
        throw new Error('arr必须是数组！');
    }
    if (!isNumber(index)) {
        throw new Error('index必须是数字！');
    }
    return arr[index % arr.length];
};
/**
 * 对象转下拉框数据
 * @param obj 对象
 */
export var objectToOptions = function (obj) {
    return Object.entries(getObject(obj)).map(function (_a) {
        var _b = __read(_a, 2), value = _b[0], label = _b[1];
        return ({
            value: value,
            label: label,
        });
    });
};
