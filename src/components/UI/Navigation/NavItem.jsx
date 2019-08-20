import React from 'react'
import {ButtonGroup} from '@@Components/UI/ButtonGroup'
import {Button} from '@@Components/UI/Button'
import { makeClassNames } from '@@Components/UI/utils/makeClassNames'


export const NavItem = ({
  active = false,
  onClick = () => {},
  path = null,
  label
}) => {
  const classNames = makeClassNames('Navigation__item', {
    active: active,
  })

  // console.log(active && active.toString())
  return <Button
    text
    className={classNames}
    onClick={() => onClick(path)}
    value={path}
    label={label}
  />
}
