import { createElement } from 'react'
import { isNumber } from '@@Components/UI/utils/checkers'
import { makeClassNames } from '../utils/makeClassNames'


export const Button = ({
  type = 'button',
  className = '',
  onClick = () => {},
  disabled = false,
  icon = null,
  label,
  value,
  children,
  tabIndex = null,
  text = false,
  primary = false,
  success = false,
  info = false,
  error = false,
  warning = false,
  block = false,
  rounded = false,
  ...rest
}) => {
  const baseClass = 'button'
  const statesFromProps = { primary, success, info, error, warning }
  const buttonStates = Object.keys(statesFromProps).filter(key => statesFromProps[ key ])
  const buttonState = buttonStates.length === 1
    ? `${baseClass}-${buttonStates[ buttonStates.length - 1 ]}`
    : `${baseClass}-default`

  const classNames = makeClassNames(baseClass, {
    [ `${baseClass}-block` ]: block,
    [ `${baseClass}-icon` ]: icon,
    [ `${baseClass}-rounded` ]: rounded,
    [ `${baseClass}-text` ]: text,
  }, buttonState, className)

  const onClickHandler = (event) => onClick(event, value)

  return createElement('button', {
    className: classNames,
    tabIndex: isNumber(tabIndex) || !Number.isNaN(parseInt(tabIndex)) ? tabIndex : false,
    value,
    disabled,
    onClick: onClickHandler,
    type,
    ...rest,
  }, [ label, children ])
}
