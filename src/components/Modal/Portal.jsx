import React from 'react'
import { createPortal } from 'react-dom'
import { portalNode } from './constants'

export class Portal extends React.Component {
  container = null

  root = portalNode

  constructor(props) {
    super(props)

    this.container = this.props.container
    this.container.className = this.props.className
    this.root.appendChild(this.container)
  }

  render() {
    return createPortal(this.props.children, this.container)
  }
}
