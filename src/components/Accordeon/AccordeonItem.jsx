import React, { useState } from 'react'
import { withSlots } from '../HOCs/Slots'
import { makeClassNames } from '../utils'


const AccordeonElement = (props) => {
  const [state, setOpened] = useState(props.isOpened)
  const classNames = makeClassNames('accordeon', {
    'accordeon_open': state
  })

  const Header = props.header

  return (
    <diV className={classNames}>
      <Header toggle={setOpened} />
      {this.props.body}
    </diV>
  )
}

const SlottedAccordeonItem = withSlots('header', 'body')(AccordeonElement)

export { SlottedAccordeonItem as AccordeonItem }
