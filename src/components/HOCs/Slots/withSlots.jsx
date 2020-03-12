import React, { Children } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

export const withSlots = (...args) => WrappedComponent => {
  if (!args.length) {
    // eslint-disable-next-line no-throw-literal
    throw 'You must passed component slots names, but got undefined'
  }

  // eslint-disable-next-line no-param-reassign
  WrappedComponent.displayName = `withSlots(${WrappedComponent.displayName || WrappedComponent.name})`

  const withSlotsComponent = ({ children, ...restProps }) => {
    const childs = () => Children.toArray(children)
    const slots = () => childs().reduce((acc, child) => {
      const { props } = child
      acc[props.slot] = child

      return acc
    }, {})

    const isSingleChildForEachSlot = () => args.every(slot =>
      childs().filter(({ props }) => props.slot ? props.slot === slot : false).length <= 1
    )

    if (!isSingleChildForEachSlot) {
      // eslint-disable-next-line no-throw-literal
      throw 'For each slot you must passed a single component'
    }

    return <WrappedComponent {...slots()} {...restProps} />
  }

  hoistNonReactStatics(withSlotsComponent, WrappedComponent)

  return withSlotsComponent
}

export const useSlots = (children) => {
  const slots = Children.toArray(children).reduce((acc, child) => {
    const { props } = child
    acc[props.slot] = child

    return acc
  }, {})

  return Object.keys(slots).map(slot => slots[slot])
}
