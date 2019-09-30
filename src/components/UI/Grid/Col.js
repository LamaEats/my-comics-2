import { makeClassNames } from '@@Components/UI/utils/makeClassNames'
import { createGridElement } from './createGridElement'

export const Col = ({
  col = 12,
  offset,
  content,
  children,
  className,
  ...rest
}) => {
  if (!content && !children) throw new ReferenceError('Col props must pass `content` or `children`')

  const baseClass = 'col'
  const classNames = makeClassNames(
    `${baseClass}-${col}`, {
      [`${baseClass}-offset-${offset}`]: offset && offset < 12
    }, className
  )

  return createGridElement({
    children: content || children,
    props: {
      className: classNames,
      ...rest
    }
  })
}
