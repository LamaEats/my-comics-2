import {
  createElement
} from 'react'
import {
  makeClassNames
} from '../utils'


export const ButtonGroup = ({
    children,
    className = ''
  }) =>
  createElement('div', {
    className: makeClassNames('button--group', className)
  }, children)
