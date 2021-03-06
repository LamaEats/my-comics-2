export const {toString} = Object.prototype
export const {hasOwnProperty} = Object.prototype

export const isObject = (value) => toString.call(value) === '[object Object]'
export const isArray = (value) => toString.call(value) === '[object Array]'
export const isString = (value) => typeof value === 'string'
export const isNumber = (value) => typeof value === 'number'
export const isFormData = (value) => (typeof FormData !== 'undefined') && (value instanceof FormData)
