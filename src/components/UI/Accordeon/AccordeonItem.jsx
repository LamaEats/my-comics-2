import React, { useState } from 'react'
import { slots } from '../HOCs/slots'
import { AccordeonBody } from './AccordeonBody'
import { AccordeonHeader } from './AccordeonHeader'
import { makeClassNames } from '@@Components/UI/utils/makeClassNames'


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

const SlottedAccordeonItem = slots('header', 'body')(AccordeonElement)

export { SlottedAccordeonItem as AccordeonItem }

