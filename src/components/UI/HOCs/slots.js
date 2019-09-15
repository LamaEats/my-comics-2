import React, { Children, Component } from 'react'

export const slots = (...args) => WrappedComponent => {
  if (!args.length) {
    throw 'You must passed component slots names, but got undefined'
  }

  return class SlottedComponent extends Component {
    get childes () {
      return Children.toArray(this.props.children)
    }

    get slots () {
      return this.childes.reduce((ob, child) => {
        const { props } = child
        ob[props.slot] = child

        return ob
      }, {})
    }

    checkGettingChildes () {
      const isSingleComponentForEachSlot = [...args].every(slots =>
        this.childes.filter(({ props }) => props.slot ? props.slot === slots : false).length <= 1
      )

      if (!isSingleComponentForEachSlot) {
        throw 'For each slot you must passed a single component'
      }
    }


    render () {
      this.checkGettingChildes();
      const { children, ...props } = this.props

      return <WrappedComponent { ...this.slots } { ...props } />
    }
  }
}