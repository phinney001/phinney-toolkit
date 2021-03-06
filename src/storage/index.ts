/**
 * storage存储
 * @date 2020-07-06
 * @author phinney
 * @version 1.0
 */
export class Storage {
  // 存储原型
  proto: any

  constructor(proto: any) {
    if (![localStorage, sessionStorage].includes(proto)) {
      throw new Error('Arguments must be localStorage or sessionStorage!')
    }
    this.proto = proto
  }

  // 存储数据长度
  get size(): number {
    return this.proto.length
  }

  // 存储数据名集合
  get keys(): Array<string> {
    return Object.keys(this.proto)
  }

  // 存储数据值集合
  get values(): Array<any> {
    return Object.keys(this.proto).map(key => this.get(key))
  }

  // 存储数据键值对集合
  get entries(): Array<any> {
    return Object.keys(this.proto).map((key) => [key, this.get(key)])
  }

  /**
   * 设置数据存储
   * @param key 数据名
   * @param val 数据值
   */
  set(key: string, val: any): Storage {
    this.proto.setItem(key, JSON.stringify(val))
    return this
  }

  /**
   * 获取数据存储
   * @param key 数据名
   */
  get(key: string): any {
    let result = this.proto.getItem(key)
    try {
      result = JSON.parse(result)
    } catch { }
    return result
  }

  /**
   * 是否包含某个数据存储
   * @param key 数据名
   */
  has(key: string): boolean {
    return Reflect.has(this.proto, key)
  }

  /**
   * 删除数据存储
   * @param key 数据名
   */
  delete(key: string): void {
    this.proto.removeItem(key)
  }

  /**
   * 清空数据存储
   * @param except 需要保留的数据存储
   */
  clear(except?: Array<string>): void {
    if (except) {
      this.keys.forEach((key) => {
        if (!except.includes(key)) {
          this.delete(key)
        }
      })
    } else {
      this.proto.clear()
    }
  }

  /**
   * 数据存储循环
   * @param cb 回调函数
   */
  forEach(cb: (key: string, value: any) => void): void {
    this.entries.forEach(([key, value]) => {
      cb(key, value)
    })
  }

}

// 长期本地存储
export const local = new Storage(localStorage)

// 短期本地存储
export const session = new Storage(sessionStorage)
