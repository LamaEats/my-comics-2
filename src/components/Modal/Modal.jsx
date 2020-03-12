import React, { useLayoutEffect } from 'react'
import { Title } from '../Title'
import { Button } from '../Button'
import { Grid } from '../Grid'
import { makeClassNames } from '../utils'
import { MODAL_SIZE } from './constants'
import { useSlots } from '../HOCs'
import { PortalAdapter } from './PortalAdapter'
import { Overlay } from './Overlay'

const toggleBodyScrollBar = (state) => {
  const diffBetweenDimensions = Math.abs(window.innerWidth - document.body.clientWidth)
  const setStyle = () => {
    document.body.style.paddingRight = `${diffBetweenDimensions}px`
  }

  if (state) {
    setStyle()
  }
  else {
    document.body.removeAttribute('style')
  }
}

const Modal = ({ shown, children, onClose, size = MODAL_SIZE.LG }) => {
  useLayoutEffect(() => {
    toggleBodyScrollBar(shown)
  }, [shown])

  const [header, body, footer] = useSlots(children)

  return (
    <PortalAdapter shown={shown}>
      {({ createRef }) => (
        <div className={makeClassNames('modal', `modal_${size.toLowerCase()}`)} ref={createRef}>
          <Overlay onClick={onClose}>
            <div className="modal__container">
              <div className="modal__wrap">
                <div className="modal__wrap-header">
                  {header}
                  <Button onClick={onClose} variant={Button.types.TEXT}>&times;</Button>
                </div>
                <div className="modal__wrap-body">
                  {body}
                </div>
                {
                  footer && (
                    <div className="modal__wrap-footer">
                      {footer}
                    </div>
                  )
                }
              </div>
            </div>
          </Overlay>
        </div>
      )}
    </PortalAdapter>
  )
}

// ModalWrap.displayName = 'Modal'

// const Modal = withClosableModal(ModalWrap)

Modal.Header = ({ title, children }) => <Title level={3} text={title || children} />
Modal.Body = ({ children }) => <Grid>{children}</Grid>
Modal.Footer = ({ children }) => children

Modal.Header.displayName = 'Modal(Header)'
Modal.Body.displayName = 'Modal(Body)'
Modal.Footer.displayName = 'Modal(Footer)'
Modal.displayName = 'Modal'

Modal.size = MODAL_SIZE

export { Modal }
