import React, { useState, useLayoutEffect } from 'react'
import { Portal } from './Portal'

export const PortalAdapter = ({ shown, children }) => {
  const container = document.querySelector('.modal-portal') || document.createElement('div')
  let modalNode = null
  const [state, dispatch] = useState(shown)

  let isClosing = false

  const handleRef = (ref) => {
    modalNode = ref

    setImmediate(() => {
      if (modalNode && !isClosing) {
        modalNode.classList.add('open')
      }
    })

  }

  const handleClose = () => {
    isClosing = true
    modalNode.classList.remove('open')
    modalNode.classList.add('closing')

    modalNode.addEventListener('transitionend', () => {
      dispatch(false)
    })
  }

  useLayoutEffect(() => {
    if (shown) {
      dispatch(shown)
    }

    if (modalNode && !shown) {
      handleClose()
    }
  }, [shown])

  return (
    <Portal className="modal-portal" container={container}>
      {state && children({ createRef: handleRef })}
    </Portal>
  )
}
