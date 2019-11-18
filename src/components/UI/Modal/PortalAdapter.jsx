import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { ModalPortal } from '@@Components/UI/Modal/Portal'

export const PortalAdapter = ({ shown, children }) => {
  let modalNode = null
  const [state, dispatch] = useState(shown)
  const handleRef = (ref) => {
    modalNode = ref
  }

  const handleClose = () => {
    modalNode.style.transform = 'translateX(100%)'
    modalNode.addEventListener('transitionend',  () => dispatch(false))
  }

  useLayoutEffect(() => {
    if (modalNode) {
      return handleClose
    }
  })

  return state && (
    <ModalPortal className="modal">
      {children(handleRef)}
    </ModalPortal>
  )
}
