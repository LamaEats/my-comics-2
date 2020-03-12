import {
  createElement
} from 'react'
import {
  makeClassNames
} from '../utils'
import {
  TYPES,
  DEFAULT
} from './constants'

const Button = ({
  type = 'button',
  className = '',
  onClick = () => {},
  disabled = false,
  icon = null,
  text,
  value,
  children,
  variant = TYPES[DEFAULT],
  block = false,
  rounded = false,
  ...rest
}) => {
  const baseClass = 'button'
  const buttonVariant = `${baseClass}_${variant.toLowerCase()}`

  const classNames = makeClassNames(baseClass, {
    [`${baseClass}_block`]: block,
    [`${baseClass}_icon`]: icon,
    [`${baseClass}_rounded`]: rounded,
  }, buttonVariant, className)

  const onClickHandler = (event) => onClick(event, value)

  return createElement('button', {
    className: classNames,
    value,
    disabled,
    onClick: onClickHandler,
    type,
    ...rest,
  }, [text, children])
}

Button.types = TYPES

export {
  Button
}