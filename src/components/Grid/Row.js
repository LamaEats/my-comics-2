import { createGridElement } from './createGridElement'
import { makeClassNames, isString } from '../utils'

export const Row = ({
  type = 'div',
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  children = null,
  className = '',
  ...rest
}) => {

  const baseClass = 'row'
  const classNames = makeClassNames(
    baseClass,
    className,
    `${baseClass}--direction-${direction}`,{
      [ `${baseClass}--align-${align}` ]: !!align && isString(align),
      [ `${baseClass}--justify-${justify}` ]: !!justify && isString(align),
      [ `${baseClass}--wrap` ]: wrap,
    }
  )

  return createGridElement({
    type,
    children,
    props: {className: classNames, ...rest}
  })
}
