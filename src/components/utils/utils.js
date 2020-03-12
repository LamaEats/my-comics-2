import {
  isArray,
  hasOwnProperty
} from './checkers'

export * from './animate'
export * from './checkers'

export const keys = (ob) => Object.keys(ob)
export const values = (ob) => keys(ob).map(key => ob[key])
export const createSimpleArray = (cb, len = 10) => Array.from({
  length: len
}).map(cb)

// eslint-disable-next-line no-console
export const logger = (type, ...callbacks) => console[type](...callbacks)

export const forEach = (object, callback) => {
  if (object === null || typeof object === 'undefined') return
  if (typeof object !== 'object') {
    // eslint-disable-next-line no-param-reassign
    object = [object]
  }

  if (isArray(object)) {
    for (let i = 0; i < object.length; i += 1) {
      callback(object[i], i, object)
    }
  } else {
    const objectKeys = Object.keys(object)
    for (let i = 0; i < objectKeys.length; i += 1) {
      const key = objectKeys[i]
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object)
      }
    }
  }
}

export const batchBy = (num) => (arr) => {
  const res = [];
  if (!arr || arr.length === 0) return res

  const copiedArray = [...arr]

  while (copiedArray.length > 0) {
    res.push(copiedArray.splice(0, num <= copiedArray.length ? num : copiedArray.length))
  }

  return res
}

export const getValueByPath = (object, path) => {
  let temp = {
    ...object
  }
  const splittedPath = path.split('.')

  while (splittedPath.length) {
    temp = temp[splittedPath.shift()]
  }

  return temp
}

export const plural = (count, titles) =>
  titles[
    // eslint-disable-next-line no-nested-ternary
    (count % 10 === 1 && count % 100 !== 11) ?
    0 :
    (count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 10 || count % 100 >= 20) ?
    1 :
    2
  ]

export const truncate = (string, length = 30, affix = '...') =>
  string && string.length > length ?
  string.substr(0, length) + affix :
  string
