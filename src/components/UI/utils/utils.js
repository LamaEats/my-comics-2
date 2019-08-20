import {
  isArray,
  hasOwnProperty
} from './checkers'

export * from './animate'
export * from './checkers'

export function forEach (object, callback) {
  if (object === null || typeof object === 'undefined') return
  if (typeof object !== 'object') object = [object]

  if (isArray(object)) {
    for (let i = 0; i < object.length; i++) callback.call(null, object[i], i, object)
  } else {
    for (let key in object) {
      if (hasOwnProperty.call(object, key)) callback.call(null, object[key], key, object)
    }
  }
}


/*export function dateFormatTo (value, format) {
  let date

  if (!value) return ''

  if (isString(value)) {
    date = new Date(value)
  } else if (isNumber(value)) {
    date = new Date(value * 1000)
  }

  switch (format) {
    case 'DDMMYYYY':
      return `${twoCharsFormat(date.getDate())}.${twoCharsFormat(date.getMonth() + 1)}.${twoCharsFormat(date.getFullYear())}`
    case 'MonthName':
      return ctx.months[date.getMonth()]
    case 'monthName': {
      let name = ctx.months[date.getMonth()]

      if (!name) return ''

      return name.charAt(0).toLowerCase() + name.substring(1)
    }
    case 'DDMMYYYY HH:MM':
      return `${dateFormatTo(value, 'DDMMYYYY')} ${twoCharsFormat(date.getHours())}:${twoCharsFormat(date.getMinutes())}`
    case 'DDMMYYYY HH:MM:SS':
      return `${dateFormatTo(value, 'DDMMYYYY HH:MM')}:${twoCharsFormat(date.getSeconds())}`
    case 'year':
      return date.getFullYear()
    case 'YYYY-MM-DD':
      return dateFormatTo(value).split('.').reverse().join('-')
    default:
      return dateFormatTo(value, 'DDMMYYYY')
  }
}*/

export function twoCharsFormat (source) {
  source = String(source)

  return source.length < 2 ? '0' + source : source
}

const getNavigator = () => window.navigator.userAgent || window.navigator.appVersion

export function isIE () {
  const appName = getNavigator()
  const msie = appName.indexOf('MSIE ')
  const trident = appName.indexOf('Trident/')

  return msie > -1 || trident > -1
}

export function isEdge () {
  const appName = getNavigator()
  return appName.indexOf('Edge/') > -1
}

export const createSimpleArray =  (cb, len = 10) => Array.from({length: len}).map(cb)
export const logger = (type, ...callbacks) => console[type](...callbacks)

export const equalsArrays = (array1, array2) =>
  [...array1, ...array2].filter((value, _i, array) =>
    array.indexOf(value) === array.lastIndexOf(value)
  ).length === 0

export const batchBy = (num) => (arr) => {
  let res = [];
  if (!arr || arr.length === 0) return res

  let copiedArray = [...arr]

  while (copiedArray.length > 0) {
    res.push(copiedArray.splice(0, num <= copiedArray.length ? num : copiedArray.length))
  }

  return res
}

export const getValueByPath = (object, path) => {
  let temp = {...object}
  let keys = path.split('.')

  while (keys.length) {
    temp = temp[ keys.shift() ]
  }

  return temp
}

export const plural = (count, titles) =>
  titles[
    (count % 10 === 1 && count % 100 !== 11)
      ? 0
      : (count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 10 || count % 100 >= 20)
        ? 1
        : 2
    ]

export const truncate = (string, length = 30, affix = '...') =>
  string && string.length > length
  ? string.substr(0, length) + affix
  : string

