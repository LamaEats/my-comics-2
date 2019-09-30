import React from 'react'
import {makeClassNames} from '@@Components/UI/utils/makeClassNames'
import { Button } from '@@Components/UI/Button'


class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: true,
    }
  }

  clickHandler = () => this.setState(() => ({
    isOpened: !this.state.isOpened,
  }))

  render () {
    const className = makeClassNames('header', {
      'header_expand': this.state.isOpened,
    })

    return (
      <div className={ className }>
        <div className="header__overlay">
          <div className="header__bubble"/>
        </div>
        <Button
          className="header__link"
          onClick={this.clickHandler}
          text
        >
          <HeaderToggleText { ...this.state } />
        </Button>
      </div>
    )
  }
}

export default Header

const HeaderToggleText = (props) => {
  

  const { isOpened } = props
  const iconText = isOpened ? 'less' : 'more'
  const iconClassName = makeClassNames('glyphicon', {
    'glyphicon-circle-arrow-down': !isOpened,
    'glyphicon-circle-arrow-up': isOpened,
  })

  return (
    <>
      { iconText }&nbsp;
      <i className={ iconClassName }/>
    </>
  )
}
