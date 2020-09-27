"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueListByChildId = exports.BMapTransQMap = exports.QMapTransBMap = exports.treeToOptions = exports.treeToObject = exports.arrayToOptions = exports.arrayToObject = void 0;
var judgment_1 = require("../judgment");
/**
 * 对象数组转对象（用户表格过滤下拉框）
 * @param arr 对象数组数据
 * @param label 字段名
 * @param value 字段值
 * @param handleValue 处理字段值方法
 */
exports.arrayToObject = function (arr, label, value, handleValue) {
    if (label === void 0) { label = 'label'; }
    if (value === void 0) { value = 'value'; }
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (t, c) {
        var _a;
        return __assign(__assign({}, t), (_a = {}, _a[c[value]] = handleValue ? handleValue === null || handleValue === void 0 ? void 0 : handleValue(c) : c[label], _a));
    }, {});
};
/**
 * 对象数组数据转换为下拉框使用数据
 * @param arr 对象数组数据
 * @param label 字段名
 * @param value 字段值
 * @param hasAll 是否返回其他字段数据
 */
exports.arrayToOptions = function (arr, label, value, hasAll) {
    if (label === void 0) { label = 'label'; }
    if (value === void 0) { value = 'value'; }
    if (hasAll === void 0) { hasAll = false; }
    return arr === null || arr === void 0 ? void 0 : arr.map(function (m) { return (__assign(__assign({}, (hasAll ? m : {})), { label: m[label], value: m[value] })); });
};
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
exports.treeToObject = function (arr, label, value, children, name, linker, handleValue) {
    if (label === void 0) { label = 'label'; }
    if (value === void 0) { value = 'value'; }
    if (children === void 0) { children = 'children'; }
    if (name === void 0) { name = ''; }
    if (linker === void 0) { linker = '/'; }
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (t, c) {
        var _a;
        var newLabel = name + c[label];
        return __assign(__assign(__assign({}, t), (_a = {}, _a[c[value]] = handleValue ? handleValue === null || handleValue === void 0 ? void 0 : handleValue(c) : (linker === false ? c[label] : newLabel), _a)), (c.children instanceof Array
            ? exports.treeToObject(c[children], label, value, children, newLabel + linker, linker)
            : {}));
    }, {});
};
/**
 * 树形数组数据转换为下拉框使用数据
 * @param arr 树形数组数据
 * @param label 字段名
 * @param value 字段值
 * @param children 子级字段名称
 * @param hasAll 是否返回其他字段数据
 */
exports.treeToOptions = function (arr, label, value, children, hasAll) {
    if (label === void 0) { label = 'label'; }
    if (value === void 0) { value = 'value'; }
    if (children === void 0) { children = 'children'; }
    if (hasAll === void 0) { hasAll = false; }
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (t, c) {
        return __spread(t, [
            __assign(__assign({}, (hasAll ? c : {})), { value: c[value], label: c[label], children: c[children] instanceof Array
                    ? exports.treeToOptions(c[children], label, value, children, hasAll)
                    : null }),
        ]);
    }, []);
};
/**
 * 经纬度转换-腾讯地图转百度地图
 * @param lng 经度
 * @param lat 纬度
 */
exports.QMapTransBMap = function (lng, lat) {
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
exports.BMapTransQMap = function (lng, lat) {
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
 * @param value 子级节点id
 * @param valueName 子级节点id名称
 * @param childrenName 子级字段名称
 */
exports.getValueListByChildId = function (list, value, valueName, childrenName) {
    if (valueName === void 0) { valueName = 'value'; }
    if (childrenName === void 0) { childrenName = 'children'; }
    if (list instanceof Array) {
        return list.reduce(function (t, c) {
            if (c[valueName] === value || judgment_1.hasChild(c[childrenName], value)) {
                return __spread(t, [
                    c[valueName]
                ], (exports.getValueListByChildId(c[childrenName], value, valueName, childrenName)));
            }
            return t;
        }, []);
    }
    return [];
};
