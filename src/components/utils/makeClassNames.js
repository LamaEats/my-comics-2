import {
  forEach,
  hasOwnProperty,
  isArray,
  isObject,
  isNumber,
  isString
} from './utils'

export const makeClassNames = (...args) => {
  const classes = []

  forEach(args, arg => {
    if (arg) {
      if (isString(arg) || isNumber(arg)) classes[classes.length] = arg
      else if (isArray(arg) && arg.length) {
        const innerArg = makeClassNames(...arg)
        if (innerArg) classes[classes.length] = innerArg
      } else if (isObject(arg)) {
        forEach(arg, (_, key) => {
          if (hasOwnProperty.call(arg, key) && arg[key]) {
            classes[classes.length] = key
          }
        })
      }
    }
  })

  return classes.join(' ').trim()
}
