export const isFunction = (Component) => typeof Component === 'function'

const isClassComponent = (Component) =>
  isFunction(Component) && !!(Component.prototype && Component.prototype.isReactComponent)

const isFunctionComponent = (Component) => {
  const string = isFunction(Component) && String(Component).toLowerCase()

  return string && string.includes('react') && string.includes('createelement')
}

export const isReactComponent = (Component) => isClassComponent(Component) || isFunctionComponent(Component)
