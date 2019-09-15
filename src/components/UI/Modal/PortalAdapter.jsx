import React, { useState, useEffect } from 'react'
import { ModalPortal } from '@@Components/UI/Modal/Portal'

export const PortalAdapter = ({ shown, children }) => {
  let modalNode = null
  const [state, dispatch] = useState(shown)
  const handleRef = (ref) => {
    modalNode = ref
  }

  const handleClose = () => {
    if (!state) {
      return
    }

    modalNode.style.transform = 'translateX(100%)'
    modalNode.addEventListener('animationend',  () => dispatch(false))
  }

  useEffect(() => {
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