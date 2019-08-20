import { createElement } from 'react'
import { makeClassNames } from '../utils/makeClassNames'


export const ButtonGroup = ({children, className = ''}) =>
  createElement('div', { className: makeClassNames(['button--group', className]) }, children)
