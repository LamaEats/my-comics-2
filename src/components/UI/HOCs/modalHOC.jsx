import React, {Component} from 'react'

export const modalHOC = WrappedComponent => {
  return class extends Component {
    static displayName = `ModalHOC.${WrappedComponent.name || WrappedComponent.displayName}`

    handleClose = () => {
      this.props.onClose()
    }

    render () {
      const { onClose, ...props } = this.props

      return (
        <WrappedComponent {...props} onClose={this.handleClose} />
      )
    }
  }
}

