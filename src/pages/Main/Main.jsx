import React, { useState } from 'react'
import { Title } from '../../components/Title'
import { Grid, Row, Col } from '../../components/Grid'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'

export const Main = () => {
  const [shown, switchShown] = useState(false)
  const [secondModal, switchShownSecond] = useState(false)

  return (
    <Grid>
      <Title level={1}>
        Hello world
      </Title>
      <Row>
        <Col>
          <Button
            onClick={() => switchShown(true)}
            variant={Button.types.PRIMARY}
            text="Open Modal"
          />
        </Col>
      </Row>

      <Modal
        shown={shown}
        onClose={() => switchShown(false)}
      >
        <Modal.Header title="Modal Panel" slot="header" />
        <Modal.Body slot="body">
          <Row>
            <Col col={10}>
              <Title level={4}>This is modal panel Body</Title>
            </Col>
            <Col col={2}>
              <Button block variant={Button.types.PRIMARY} onClick={() => switchShownSecond(true)}>
                Open next
              </Button>
            </Col>
          </Row>
          <Row>

          </Row>
        </Modal.Body>
        <Modal.Footer slot="footer">
          <Button onClick={() => switchShown(false)} variant={Button.types.PRIMARY}>OK</Button>
          <Button onClick={() => switchShown(false)} variant={Button.types.TEXT}>Cancel</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        shown={secondModal}
        onClose={() => switchShownSecond(false)}
        size={Modal.size.SM}
      >
        <Modal.Header title="Modal Panel Second" slot="header" />
        <Modal.Body slot="body">
          <Row>
            <Col>
              <Title>This is modal panel Body Second</Title>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer slot="footer">
          <Button onClick={() => switchShownSecond(false)} variant={Button.types.PRIMARY}>OK</Button>
          <Button onClick={() => switchShownSecond(false)} variant={Button.types.TEXT}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </Grid>
  )
}
