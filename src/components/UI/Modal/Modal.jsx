import React, { useEffect } from 'react'
import { slots } from '@@Components/UI/HOCs/slots'
import { Title } from '@@Components/UI/Title'
import { Button } from '@@Components/UI/Button'
import { Grid } from '@@Components/UI/Grid/Grid'
import { ModalPortal } from '@@Components/UI/Modal/Portal'
import { makeClassNames } from '@@Components/UI/utils/makeClassNames'
import { MODAL_SIZE } from '@@Components/UI/Modal/constants'
import { modalHOC } from '@@Components/UI/HOCs/modalHOC'

const toggleBodyScrollBar = (state) => {
  const diffBetweenDimensions = Math.abs(window.innerWidth - document.body.clientWidth)
  const setStyle = () => document.body.style.paddingRight = `${diffBetweenDimensions}px`

  if (state) {
    setStyle()
  }
  else {
    document.body.removeAttribute('style')
  }
}

const Overlay = ({ shown, children }) => shown ? (
  <div className="modal__overlay">
    {children}
  </div>
) : null

const ModalWrap = ({ shown, header, body, footer, onClose, size = MODAL_SIZE.LG }) => {

  useEffect(() => {
    toggleBodyScrollBar(shown)
  })

  return shown && (
    <ModalPortal className="modal" shown={shown}>
      {({ createPortal }) => (
        <Overlay shown={shown} onClick={onClose}>
          <div className={makeClassNames('modal__content', `modal__content_${size.toLowerCase()}`)} ref={createPortal}>
            <div className="modal__header">
              {header}
              <Button onClick={onClose} label="&times;" text />
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
        </Overlay>
      )}


    </ModalPortal>
  )
}

const Modal = slots('header', 'body', 'footer')(modalHOC(ModalWrap))

Modal.Header = ({ title, children }) => <Title level={3} text={title || children } />
Modal.Body = (props) => <Grid>{props.children}</Grid>
Modal.Footer = () => {}
Modal.Header.displayName = 'ModalHeader'
Modal.Body.displayName = 'ModalBody'

export { Modal }

