/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-18 09:14:05
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-25 14:52:35
 * @Description: 
 */

/**
 * @description: 转换文件大小 B=>KB 等
 * @param {*} bytes B
 * @return {string} String KB 等
 */
export const b2size = (bytes: any): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const result =
    parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  return result
}

interface IOptions {
  Bit: {
    toByte(): number
    toKB(): number
    toMB(): number
    toGB(): number
    toTB(): number
  }
  Byte: {
    toBit(): number
    toKB(): number
    toMB(): number
    toGB(): number
    toTB(): number
  }
  KB: {
    toBit(): number
    toByte(): number
    toMB(): number
    toGB(): number
    toTB(): number
  }
  MB: {
    toBit(): number
    toByte(): number
    toKB(): number
    toGB(): number
    toTB(): number
  }
  GB: {
    toBit(): number
    toByte(): number
    toKB(): number
    toMB(): number
    toTB(): number
  }
  TB: {
    toBit(): number
    toByte(): number
    toKB(): number
    toMB(): number
    toGB(): number
  }
}

/**进位 */
function _carryBit(t: number, index: number): number {
  return t * (1024 ** (index - 1)) * 8
}
/**降位 */
function _dropBit(t: number, index: number): number {
  return t / (1024 ** (index - 1)) / 8
}

function _up(t: number, index: number): number {
  // return t >> (index * 10)
  return t / (1024 ** index)
}
function _down(t: number, index: number): number {
  // return t << (index * 10)
  return t * (1024 ** index)
}

/**
* 字节转换 转换成多种格式
* @param {number} b byte
*/
export function bytes(target: number): IOptions {
  return {
    Bit: {
      toByte: () => _dropBit(target, 1),
      toKB: () => _dropBit(target, 2),
      toMB: () => _dropBit(target, 3),
      toGB: () => _dropBit(target, 4),
      toTB: () => _dropBit(target, 5),
    },
    Byte: {
      toBit: () => _carryBit(target, 1),
      toKB: () => _up(target, 1),
      toMB: () => _up(target, 2),
      toGB: () => _up(target, 3),
      toTB: () => _up(target, 4),
    },
    KB: {
      toBit: () => _carryBit(target, 2),
      toByte: () => _down(target, 1),
      toMB: () => _up(target, 1),
      toGB: () => _up(target, 2),
      toTB: () => _up(target, 3),
    },
    MB: {
      toBit: () => _carryBit(target, 3),
      toByte: () => _down(target, 2),
      toKB: () => _down(target, 1),
      toGB: () => _up(target, 1),
      toTB: () => _up(target, 2),
    },
    GB: {
      toBit: () => _carryBit(target, 4),
      toByte: () => _down(target, 3),
      toKB: () => _down(target, 2),
      toMB: () => _down(target, 1),
      toTB: () => _up(target, 1),
    },
    TB: {
      toBit: () => _carryBit(target, 5),
      toByte: () => _down(target, 4),
      toKB: () => _down(target, 3),
      toMB: () => _down(target, 2),
      toGB: () => _down(target, 1),
    },
  }
}


export default {
  b2size,
  bytes
}