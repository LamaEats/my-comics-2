import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { slots } from '@@Components/UI/HOCs/slots'
import { Title } from '@@Components/UI/Title'
import { Button } from '@@Components/UI/Button'
import { Grid } from '@@Components/UI/Grid/Grid'
import { portalNode, modalRoot } from '@@Components/UI/Modal/constants'

const Portal = ({ children }) => createPortal(children, modalRoot)

const toggleBodyScrollBar = (state) => {
  const diffBetweenDimensions = Math.abs(window.innerWidth - document.body.clientWidth)
  const setStyle = () => document.body.style.paddingRight = `${diffBetweenDimensions}px`

  if (state) {
    setStyle()
  }
  else {
    document.body.removeAttribute('style')
  }

  document.body.classList.toggle('modal_opened', state);
}

const ModalWrap = ({ shown, header, body, footer, onClose }) => {
  if (!portalNode.contains(modalRoot)) {
    portalNode.appendChild(modalRoot);
  }

  useEffect(() => {
    if (shown) {
      modalRoot.classList.remove('modal_no-transition')
    }

    toggleBodyScrollBar(shown)
  })

  return (
    <Portal>
      <div className="modal__content">
        <div className="modal__header">
          {header}
          <Button onClick={onClose} label="Close" text />
        </div>
        <div className="modal__body">
          {body}
        </div>
        {
          footer && (
            <div className="modal__footer">
              {footer}
            </div>
          )
        }
      </div>
      <div className="modal__overlay" onClick={onClose} />
    </Portal>

  )
}

const Modal = slots('header', 'body', 'footer')(ModalWrap)

Modal.Header = ({ title, children }) => <Title level={3} text={title || children } />
Modal.Body = (props) => <Grid {...props} />
Modal.Footer = () => {}
Modal.Header.displayName = 'ModalHeader'
Modal.Body.displayName = 'ModalBody'

export { Modal }

