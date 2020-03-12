import React, { useRef } from 'react'

export const Overlay = ({ children, onClick }) => {
  const overlayNode = useRef()
  const handleClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.target === overlayNode.current) {
      onClick()
    }
  }

  return (
    <div className="modal__overlay" onClick={handleClick} ref={overlayNode} >
      {children}
    </div>
  )
}