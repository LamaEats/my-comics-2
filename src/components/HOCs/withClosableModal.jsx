import React from 'react'


export const withClosableModal = WrappedComponent => ({ onClose = () => { }, ...props }) => {
  const handleClose = () => {
    onClose()
  }



  // hoistNonReactStatics(withClosableModal, WrappedComponent)

  // eslint-disable-next-line no-param-reassign
  // WrappedComponent.displayName = `withClosableModal(${WrappedComponent.displayName || WrappedComponent.name})`

  return <WrappedComponent {...props} onClose={handleClose} />
}
