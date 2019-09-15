import React, { Children } from 'react'
import { createPortal } from 'react-dom'
import { portalNode } from '@@Components/UI/Modal/constants'

export class ModalPortal extends React.Component {
  container = document.createElement('div')
  root = portalNode

  componentDidMount () {
    this.container.className = this.props.className
    this.root.appendChild(this.container)
  }

  componentDidUpdate () {
    this.container.className = this.props.className
  }


  componentWillUnmount () {
    this.root.removeChild(this.container)
  }

  render () {
    return createPortal(this.props.children, this.container)
  }
}