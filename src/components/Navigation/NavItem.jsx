import React from 'react'
import { Button } from '../Button'
import { makeClassNames } from '../utils'


export const NavItem = ({
  active = false,
  onClick = () => { },
  path = null,
  label
}) => {
  const classNames = makeClassNames('Navigation__item', {
    active,
  })

  return <Button
    text
    className={classNames}
    onClick={() => onClick(path)}
    value={path}
    label={label}
  />
}
