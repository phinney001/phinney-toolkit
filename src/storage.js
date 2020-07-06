/**
 * storage存储
 * @date 2020-07-06
 * @author phinney
 * @version 1.0
 */
export class Storage {
  // 存储原型
  proto

  constructor(proto) {
    if (![localStorage, sessionStorage].includes(proto)) {
      throw new Error('Arguments must be localStorage or sessionStorage!')
    }
    this.proto = proto
  }

  /**
   * 存储数据长度
   * @returns {Number}
   */
  get size() {
    return this.proto.length
  }

  /**
   * 存储数据名集合
   * @returns {Array<String>}
   */
  get keys() {
    return Reflect.ownKeys(this.proto)
  }

  /**
   * 存储数据值集合
   * @returns {Array<*>}
   */
  get values() {
    return Reflect.ownKeys(this.proto).map(key => this.get(key))
  }

  /**
   * 存储数据键值对集合
   * @returns {Array<{key:value}>}
   */
  get entries() {
    return Reflect.ownKeys(this.proto).map((key) => [key, this.get(key)])
  }

  /**
   * 设置数据存储
   * @param {String} key 数据名
   * @param {*} val 数据值
   * @returns {Storage}
   */
  set(key, val) {
    this.proto.setItem(key, JSON.stringify(val))
    return this
  }

  /**
   * 获取数据存储
   * @param {String} key 数据名
   * @returns {*}
   */
  get(key) {
    let result = this.proto.getItem(key)
    try {
      result = JSON.parse(result)
    } catch { }
    return result
  }

  /**
   * 是否包含某个数据存储
   * @param {String} key 数据名
   * @returns {Boolean}
   */
  has(key) {
    return Reflect.has(this.proto, key)
  }

  /**
   * 删除数据存储
   * @param {String} key 数据名
   */
  delete(key) {
    this.proto.removeItem(key)
  }

  /**
   * 清空数据存储
   * @param {Array<String>} except 需要保留的数据存储
   */
  clear(except) {
    if (except) {
      this.keys.forEach(key => {
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
   * @param {(key, value) => void} cb 回调函数
   */
  forEach(cb) {
    this.entries.forEach(([key, value]) => {
      cb(key, value)
    })
  }

}

// 长期本地存储
export const local = new Storage(localStorage)

// 短期本地存储
export const session = new Storage(sessionStorage)
