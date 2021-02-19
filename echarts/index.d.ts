/** @title echarts图表快捷方法 */
import { AxisOptions, AxisTick, GridOptions, LabelOption, LineOption, ShadowOption, TextOption, TooltipOptions } from './interface';
/**
 * 获取文本配置
 * @param options 文本配置
 */
export declare const getTextOption: (options?: string | boolean | TextOption | undefined) => any;
/**
 * 获取标签配置
 * @param options 标签配置
 */
export declare const getLabelOption: (options?: string | boolean | LabelOption | undefined) => any;
/**
 * 获取线配置
 * @param options 线配置
 */
export declare const getLineOption: (options?: string | boolean | LineOption | undefined) => any;
/**
 * 获取阴影配置
 * @param options 阴影配置
 */
export declare const getShadowOption: (options?: string | boolean | ShadowOption | undefined) => any;
/**
 * 获取刻度线配置
 * @param options 刻度线配置
 */
export declare const getAxisTick: (options?: string | boolean | AxisTick | undefined) => any;
/**
 * 获取轴线配置
 * @param options 轴线配置
 */
export declare const getAxisLine: (options?: string | boolean | LineOption | undefined) => any;
/**
 * 获取轴线配置
 * @param options.label 轴线标签
 * @param options.tick 轴线刻度线
 * @param options.line 轴线
 * @param options.split 分隔线
 */
export declare const getAxis: (options?: AxisOptions | undefined) => any;
/**
 * 获取formatter方法
 * @param dealFunc 处理方法
 */
export declare const getFormatter: (dealFunc?: Function | undefined) => {};
/**
 * 获取初始tooltip提示框
 * @param options tooltip配置
 */
export declare const getTooltip: (options?: TooltipOptions | undefined) => any;
/**
 * 获取初始grid配置
 * @param options grid配置
 */
export declare const getGrid: (options?: GridOptions | undefined) => {
    top: string | number;
    bottom: string | number;
    left: string | number;
    right: string | number;
    containLabel: boolean;
};
/**
 * 设置烛形图名称
 * @param names 烛形图名称列表 [open, close, lowest, highest]
 */
export declare const setCandleNames: (names: string[]) => {
    dimensions: string[];
    encode: {
        tooltip: string[];
    };
};
/**
 * 设置烛形图颜色
 * @param color 烛形图颜色
 */
export declare const setCandleColor: (color: string) => {
    itemStyle: {
        color: string;
        color0: string;
        borderColor: string;
        borderColor0: string;
    };
};
