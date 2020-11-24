/**
 * 线接口
 * @param color 线颜色
 * @param type 线类型
 * @param 其它参数请参考echarts官网文档
 */
export interface LineOption {
    color?: string;
    type?: string;
    [key: string]: any;
}
/**
 * 标签接口
 * @param size 字体大小
 * @param color 字体颜色
 * @param formatter 标签格式化方法
 * @param 其它参数请参考echarts官网文档
 */
export interface LabelOption {
    size?: number | string;
    color?: string;
    formatter?: (data: any) => string;
    [key: string]: any;
}
/**
 * 文本接口
 * @param size 字体大小
 * @param color 字体颜色
 * @param lineHeight 字体行高
 * @param 其它参数请参考echarts官网文档
 */
export interface TextOption {
    size?: number | string;
    color?: string;
    lineHeight?: number;
    [key: string]: any;
}
/**
 * 阴影接口
 * @param color 填充色
 * @param opacity 透明度
 * @param shadowColor 阴影颜色
 * @param shadowBlur 阴影模糊大小
 * @param shadowOffsetX 阴影水平偏移
 * @param shadowOffsetY 阴影垂直偏移
 * @param 其它参数请参考echarts官网文档
 */
export interface ShadowOption {
    color?: string;
    opacity?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    [key: string]: any;
}
/**
 * 轴线标签轴线刻度线接口
 * @param center 是否根据标签居中对齐
 * @param 其它参数请参考echarts官网文档
 */
export interface AxisTick extends LineOption {
    center?: boolean;
    [key: string]: any;
}
/**
 * 轴线配置接口
 * @param label 是否显示标签|标签颜色|标签配置
 * @param tick 是否显示刻度线|刻度线颜色|刻度线配置
 * @param line 是否显示轴线|轴线颜色|轴线配置
 * @param split 是否显示分隔线|分隔线颜色|分割线配置
 * @param 其它参数请参考echarts官网文档
 */
export interface AxisOptions {
    label?: boolean | string | LabelOption;
    tick?: boolean | string | AxisTick;
    line?: boolean | string | LineOption;
    split?: boolean | string | LineOption;
    [key: string]: any;
}
/**
 * 提示框配置接口
 * @param trigger 触发方式
 * @param format 弹窗内容修改方法
 * @param background 背景颜色
 * @param color 文字颜色
 * @param size 文字大小
 * @param line 指示线，与shadow、cross只能三选一
 * @param shadow 指示阴影颜色，与line、cross只能三选一
 * @param cross 指示交叉线，与line、shadow只能三选一
 * @param 其它参数请参考echarts官网文档
 */
export interface TooltipOptions {
    trigger?: 'axis' | 'item' | 'none';
    format?: Function;
    background?: string;
    color?: string;
    size?: number | string;
    line?: boolean | string | LineOption;
    shadow?: boolean | string | ShadowOption;
    cross?: boolean | string | LineOption;
    [key: string]: any;
}
/**
 * 栅格配置接口
 * @param top 上侧距离
 * @param bottom 下侧距离
 * @param left 左侧距离
 * @param right 右侧距离
 * @param containLabel 是否包含坐标轴标签
 * @param 其它参数请参考echarts官网文档
 */
export interface GridOptions {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    containLabel?: boolean;
    [key: string]: any;
}
