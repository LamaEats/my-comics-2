export const compose = (...fns) => {
  if (!fns.length) {
    return arg => arg
  }

  if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduce((m, fn) => (...args) => fn(m(...args)))
}