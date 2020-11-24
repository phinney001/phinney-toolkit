"use strict";
/** @title echarts图表快捷方法 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.setCandleColor = exports.setCandleNames = exports.getGrid = exports.getTooltip = exports.getFormatter = exports.getAxis = exports.getAxisLine = exports.getAxisTick = exports.getShadowOption = exports.getLineOption = exports.getLabelOption = exports.getTextOption = void 0;
var absolute_1 = require("../absolute");
var judgment_1 = require("../judgment");
var transform_1 = require("../transform");
/**
 * 获取文本配置
 * @param options 文本配置
 */
exports.getTextOption = function (options) {
    // 设置文本
    if (judgment_1.isString(options)) {
        return { color: options };
    }
    if (judgment_1.isObject(options)) {
        var _a = options, color = _a.color, fontSize = _a.size, other = __rest(_a, ["color", "size"]);
        return transform_1.objectMerge(__assign(__assign({}, (color && { color: color })), (fontSize && { fontSize: fontSize })), other);
    }
    return {};
};
/**
 * 获取标签配置
 * @param options 标签配置
 */
exports.getLabelOption = function (options) {
    // 设置标签
    if (options === false) {
        return { show: false };
    }
    if (judgment_1.isString(options)) {
        return { color: options };
    }
    if (judgment_1.isObject(options)) {
        var _a = options, color = _a.color, fontSize = _a.size, other = __rest(_a, ["color", "size"]);
        return transform_1.objectMerge(__assign(__assign({}, (color && { color: color })), (fontSize && { fontSize: fontSize })), other);
    }
    return {};
};
/**
 * 获取线配置
 * @param options 线配置
 */
exports.getLineOption = function (options) {
    // 设置轴线
    if (options === false) {
        return { show: false };
    }
    if (judgment_1.isString(options)) {
        return { color: options };
    }
    if (judgment_1.isObject(options)) {
        var _a = options, color = _a.color, type = _a.type, other = __rest(_a, ["color", "type"]);
        return transform_1.objectMerge(__assign(__assign({}, (color && { color: color })), (type && { type: type })), other);
    }
    return {};
};
/**
 * 获取阴影配置
 * @param options 阴影配置
 */
exports.getShadowOption = function (options) {
    // 设置文本
    if (judgment_1.isString(options)) {
        return { color: options };
    }
    if (judgment_1.isObject(options)) {
        var _a = options, color = _a.color, other = __rest(_a, ["color"]);
        return transform_1.objectMerge(__assign({}, (color && { color: color })), other);
    }
    return {};
};
/**
 * 获取刻度线配置
 * @param options 刻度线配置
 */
exports.getAxisTick = function (options) {
    // 设置刻度线
    if (options === false) {
        return { show: false };
    }
    if (judgment_1.isString(options)) {
        return { lineStyle: { color: options } };
    }
    if (judgment_1.isObject(options)) {
        var _a = options, color = _a.color, fontSize = _a.size, alignWithLabel = _a.center, other = __rest(_a, ["color", "size", "center"]);
        return transform_1.objectMerge(__assign(__assign(__assign({}, (color && { lineStyle: { color: color } })), (fontSize && { fontSize: fontSize })), (alignWithLabel && { alignWithLabel: alignWithLabel })), other);
    }
    return {};
};
/**
 * 获取轴线配置
 * @param options 轴线配置
 */
exports.getAxisLine = function (options) {
    // 设置轴线
    if (options === false) {
        return { show: false };
    }
    if (judgment_1.isString(options)) {
        return { lineStyle: { color: options } };
    }
    if (judgment_1.isObject(options)) {
        var _a = options, color = _a.color, type = _a.type, other = __rest(_a, ["color", "type"]);
        return transform_1.objectMerge(__assign({}, ((color || type) &&
            {
                lineStyle: exports.getLineOption({ color: color, type: type })
            })), other);
    }
    return {};
};
/**
 * 获取轴线配置
 * @param options.label 轴线标签
 * @param options.tick 轴线刻度线
 * @param options.line 轴线
 * @param options.split 分隔线
 */
exports.getAxis = function (options) {
    // 不显示轴线
    if (!options)
        return { show: false };
    var _a = options || {}, label = _a.label, tick = _a.tick, line = _a.line, split = _a.split, other = __rest(_a, ["label", "tick", "line", "split"]);
    // 返回配置
    return transform_1.objectMerge(__assign(__assign(__assign(__assign({}, (Reflect.has(options, 'label') && { axisLabel: exports.getLabelOption(label) })), (Reflect.has(options, 'tick') && { axisTick: exports.getAxisTick(tick) })), (Reflect.has(options, 'line') && { axisLine: exports.getAxisLine(line) })), (Reflect.has(options, 'split') && { splitLine: exports.getAxisLine(split) })), other);
};
/**
 * 获取formatter方法
 * @param dealFunc 处理方法
 */
exports.getFormatter = function (dealFunc) {
    if (!dealFunc)
        return {};
    return function (params) {
        if (judgment_1.isArray(params)) {
            return params.reduce(function (total, current, index) {
                total += dealFunc === null || dealFunc === void 0 ? void 0 : dealFunc(__assign(__assign({}, current), { index: index, content: "" + (((current === null || current === void 0 ? void 0 : current.axisValue) && !index)
                        ? ((current === null || current === void 0 ? void 0 : current.axisValue) + '<br>')
                        : '') + absolute_1.getString(current, 'marker') + absolute_1.getString(current, 'seriesName') }));
                return total;
            }, '');
        }
        return dealFunc === null || dealFunc === void 0 ? void 0 : dealFunc(__assign(__assign({}, params), { content: "" + absolute_1.getString(params, 'marker') + absolute_1.getString(params, 'name') }));
    };
};
/**
 * 获取初始tooltip提示框
 * @param options tooltip配置
 */
exports.getTooltip = function (options) {
    // 不显示提示框
    if (!options)
        return { show: false };
    var _a = options || {}, format = _a.format, color = _a.color, size = _a.size, backgroundColor = _a.background, line = _a.line, shadow = _a.shadow, cross = _a.cross, other = __rest(_a, ["format", "color", "size", "background", "line", "shadow", "cross"]);
    if ([line, cross, shadow].filter(function (f) { return f; }).length > 1) {
        throw new Error('line、shadow和cross只能选一个！');
    }
    return transform_1.objectMerge(__assign(__assign(__assign(__assign(__assign(__assign({}, (format && { formatter: exports.getFormatter(format) })), ((color || size) &&
        {
            textStyle: exports.getTextOption({ color: color, size: size })
        })), (line && {
        axisPointer: {
            type: 'line',
            lineStyle: exports.getLineOption(line)
        }
    })), (shadow && {
        axisPointer: {
            type: 'shadow',
            shadowStyle: exports.getShadowOption(shadow)
        }
    })), (cross && {
        axisPointer: {
            type: 'cross',
            crossStyle: exports.getLineOption(cross)
        }
    })), (backgroundColor && { backgroundColor: backgroundColor })), other);
};
/**
 * 获取初始grid配置
 * @param options grid配置
 */
exports.getGrid = function (options) {
    return __assign({ top: 10, left: 0, right: 0, bottom: 0, containLabel: true }, options);
};
/**
 * 设置烛形图名称
 * @param names 烛形图名称列表 [open, close, lowest, highest]
 */
exports.setCandleNames = function (names) {
    return {
        dimensions: __spread(['ordinal'], names),
        encode: {
            tooltip: names
        },
    };
};
/**
 * 设置烛形图颜色
 * @param color 烛形图颜色
 */
exports.setCandleColor = function (color) {
    return {
        itemStyle: {
            color: color,
            color0: color,
            borderColor: color,
            borderColor0: color,
        }
    };
};
