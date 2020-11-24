# phinney-toolkit
公共方法库
#### 判断函数
```javascript
isFunction: (data: any)
```
#### 对象合并
```javascript
objectMerge: (origin: any = {}, newData: any = {})
```
#### 数据合计
```javascript
sum: (origin: any[] = [], key?: string | Function, initVal = 0)
```

## judgment 判断数据类型
#### 判断对象，containNull：是否包含null
```javascript
isObject: (data: any, containNull?: boolean) => boolean
```
#### 判断非空对象
```javascript
isNotEmptyObject: (data: any) => boolean
```
#### 判断数组
```javascript
isArray: (data: any) => boolean
```
#### 判断非空数组
```javascript
isNotEmptyArray: (data: any) => boolean
```
#### 判断字符串
```javascript
isString: (data: any) => boolean
```
#### 判断非空字符串，trim：是否去除前后空字符串
```javascript
isNotEmptyString: (data: any, trim?: boolean) => boolean
```
#### 判断数值，containNaN：是否包含NaN
```javascript
isNumber: (data: any, containNaN?: boolean) => boolean
```
#### 判断布尔值
```javascript
isBoolean: (data: any) => boolean
```
#### 判断undefined
```javascript
isUndefined: (data: any) => boolean
```
#### 判断null
```javascript
isNull: (data: any) => boolean
```
#### 判断不是null或undefined
```javascript
isNotNullOrUndefined: (data: any) => boolean
```
#### 判断是否含有某个子节点
```javascript
hasChild: (list: any[], options: any) => boolean
```

## storage 本地存储方法
### local 长期存储 / session 短期存储
#### 存储数据长度
```javascript
size: number
```
#### 存储数据名集合
```javascript
keys: Array<string>
```
#### 存储数据值集合
```javascript
values: Array<any>
```
#### 存储数据键值对集合
```javascript
entries: Array<any>
```
#### 设置数据存储
```javascript
set(key: string, val: any): Storage
```
#### 获取数据存储
```javascript
get(key: string): any
```
#### 是否包含某个数据存储
```javascript
has(key: string): boolean
```
#### 删除数据存储
```javascript
delete(key: string): void
```
#### 清空数据存储，except：需要保留的数据存储
```javascript
clear(except: Array<string>): void
```
#### 数据存储循环，cb：回调函数
```javascript
forEach(cb: (key: string, value: any) => void): void
```

## transform 数据转换方法
#### 对象数组转对象（用户表格过滤下拉框）
```javascript
arrayToObject: (arr: any[], options: any) => any
```
#### 对象数组数据转换为下拉框使用数据
```javascript
arrayToOptions: (arr: any[], options: any) => any
```
#### 树形数组转对象（用户表格过滤下拉框）
```javascript
treeToObject: (arr: any[], options: any) => any
```
#### 树形数组数据转换为下拉框使用数据
```javascript
treeToOptions: (arr: any[], options: any) => any
```
#### 数据类型处理中转
```javascript
transitData: (data: any[], valueType?: string, options: any) => any
```
#### 经纬度转换-腾讯地图转百度地图
```javascript
QMapTransBMap: ({ lng: number, lat: number }) => { lng: number, lat: number }
```
#### 经纬度转换-百度地图转腾讯地图
```javascript
BMapTransQMap: ({ lng: number, lat: number }) => { lng: number, lat: number }
```
#### 根据子节点id获取含有父级节点id列表
```javascript
getValueListByChildId: (list: any[], options: any) => any[]
```
#### 设置数值精度
```javascript
precision(num: any, options: any): any
```

## absolute 获取绝对数据类型
#### 根据数据源获取数据
```javascript
getDataByOrigin: (origin: any, path: string, defaults?: any)
```
#### 根据数据源获取数组
```javascript
getArray: (origin: any, path: string, defaults = [])
```
#### 根据数据源获取对象
```javascript
getObject: (origin: any, path: string, defaults = {})
```
#### 根据数据源获取字符串
```javascript
getString: (origin: any, path: string, defaults = '')
```
#### 根据数据源获取数值
```javascript
getNumber: (origin: any, path: string, defaults = 0)
```
#### 根据数据源获取布尔值
```javascript
getBoolean: (origin: any, path: string, defaults = false)
```
#### 根据数据源获取函数
```javascript
getFunction: (origin: any, path: string, defaults = ()
```

## echarts echarts图表快捷方法
#### 获取文本配置
```javascript
getTextOption: (options?: TextOption | boolean | string)
```
#### 获取标签配置
```javascript
getLabelOption: (options?: LabelOption | boolean | string)
```
#### 获取线配置
```javascript
getLineOption: (options?: LineOption | boolean | string)
```
#### 获取阴影配置
```javascript
getShadowOption: (options?: ShadowOption | boolean | string)
```
#### 获取刻度线配置
```javascript
getAxisTick: (options?: AxisTick | boolean | string)
```
#### 获取轴线配置
```javascript
getAxisLine: (options?: LineOption | boolean | string)
```
#### 获取formatter方法
```javascript
getFormatter: (dealFunc?: Function)
```
#### 获取初始tooltip提示框
```javascript
getTooltip: (options?: TooltipOptions)
```
#### 获取初始grid配置
```javascript
getGrid: (options?: GridOptions)
```
