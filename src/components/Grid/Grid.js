import { createGridElement } from './createGridElement'
import {makeClassNames} from '../utils'

export const Grid = ({
  type = 'section',
  children,
  className = '',
  ...rest
}) => {
  const baseClass = 'grid'
  const classNames = makeClassNames(baseClass, className)

  return createGridElement({
    type,
    children,
    props: {className: classNames, ...rest}
  })
}

