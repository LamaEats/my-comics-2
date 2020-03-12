import {
  createElement
} from 'react'


export const BaseInput = ({
  type = 'text',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onKeyDown = () => {},
  onKeyUp = () => {},
  onKeyPress = () => {},
  onMouseDown = () => {},
  onMouseUp = () => {},
  onClick = () => {},
  ...rest
}) => {

  return createElement('input', {
    type,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onMouseDown,
    onMouseUp,
    onClick,
    ...rest
  })
}
