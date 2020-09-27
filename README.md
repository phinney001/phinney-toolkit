# phinney-toolkit
公共方法库

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
hasChild: (list: any[], value: any, valueName = 'value', childrenName = 'children') => boolean
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
arrayToObject: (arr: any[], label?: string, value?: string, handleValue?: Function | undefined) => any;
```
#### 对象数组数据转换为下拉框使用数据
```javascript
arrayToOptions: (arr: any[], label?: string, value?: string, hasAll?: boolean) => any;
```
#### 树形数组转对象（用户表格过滤下拉框）
```javascript
treeToObject: (arr: any[], label?: string, value?: string, children?: string, name?: string, linker?: string | boolean, handleValue?: Function | undefined) => any;
```
#### 树形数组数据转换为下拉框使用数据
```javascript
treeToOptions: (arr: any[], label?: string, value?: string, children?: string, hasAll?: boolean) => any;
```
#### 经纬度转换-腾讯地图转百度地图
```javascript
QMapTransBMap: (lng: number, lat: number) => { lng: number, lat: number }
```
#### 经纬度转换-百度地图转腾讯地图
```javascript
BMapTransQMap: (lng: number, lat: number) => { lng: number, lat: number }
```
#### 根据子节点id获取含有父级节点id列表
```javascript
getValueListByChildId: (list: any[], value: any, valueName?: string, childrenName?: string) => any[];
```