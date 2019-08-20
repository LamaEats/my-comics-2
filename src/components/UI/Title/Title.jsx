import { createElement } from 'react'
import { makeClassNames } from '../utils/makeClassNames'


export const Title = ({
  level = 1,
  text,
  children,
  className,
  ...rest
}) => {
  if (!level || level > 6) throw new ReferenceError('Title requires a `level` attribute from 1 to 6')

  return createElement(`h${level}`, {
    className: makeClassNames(`title`, className),
    ...rest
  }, text || children)
}
