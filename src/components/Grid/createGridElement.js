import { createElement } from 'react'


export const createGridElement = ({
  type = 'div',
  props = {},
  children = null
}) => createElement(type, props, children)

