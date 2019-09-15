import React from 'react'
import { Modal, MODAL_SIZE } from '@@Components/UI/Modal'
import { Button } from '@@Components/UI/Button'
import { ButtonGroup } from '@@Components/UI/ButtonGroup'
import { default as Grid } from '@@Components/UI/Grid'

const {
  Grid: Container, Row, Col
} = Grid

const PanelName = {
  FIRST: 'firstPanel',
  SECOND: 'secondPanel',
  THIRD: 'thirdPanel'
};

export class ModalsContainer extends React.Component {
  state = {
    [PanelName.FIRST]: false,
    [PanelName.SECOND]: false,
    [PanelName.THIRD]: false
  };

  handleShowPanel = (name) => () => this.setState((prevState) => ({ ...prevState, [name]: true }))

  handleClosePanel = (name) => () => this.setState((prevState) => ({ ...prevState, [name]: false }))

  handleCloseAllModals = () => this.setState((prevState) => ({
    ...prevState,
    [PanelName.FIRST]: false,
    [PanelName.SECOND]: false,
    [PanelName.THIRD]: false
  }))

  buttons = [
    { type: 'primary', label: 'first', onClick: this.handleShowPanel(PanelName.FIRST) },
    { type: 'primary', label: 'second', onClick: this.handleShowPanel(PanelName.SECOND) },
    { type: 'primary', label: 'third', onClick: this.handleShowPanel(PanelName.THIRD) },
  ]


  render () {
    return (
      <Container>
        <Row>
          <Col>
            <ButtonGroup>
              {this.buttons.map(btn => (
                <Button {...btn} />
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <Modal
          onClose={this.handleClosePanel(PanelName.FIRST)}
          shown={this.state[PanelName.FIRST]}
          size={MODAL_SIZE.LG}
        >
          <Modal.Header slot="header">
            First
          </Modal.Header>
          <Modal.Body slot="body">
            <Row>
              <Col>
                <Button onClick={this.handleClosePanel(PanelName.FIRST)}>Close current</Button>
                <Button onClick={this.handleShowPanel(PanelName.SECOND)}>Open Next</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          onClose={this.handleClosePanel(PanelName.SECOND)}
          shown={this.state[PanelName.SECOND]}
          size={MODAL_SIZE.MD}
        >
          <Modal.Header slot="header">
            Second
          </Modal.Header>
          <Modal.Body slot="body">
            <Row>
              <Col>
                {!this.state[PanelName.FIRST] && (
                  <Button onClick={this.handleShowPanel(PanelName.FIRST)}>Open First</Button>
                )}
                <Button onClick={this.handleClosePanel(PanelName.SECOND)}>Close current</Button>
                <Button onClick={this.handleShowPanel(PanelName.THIRD)}>Open Next</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Modal
          onClose={this.handleClosePanel(PanelName.THIRD)}
          shown={this.state[PanelName.THIRD]}
          size={MODAL_SIZE.SM}
        >
          <Modal.Header slot="header">
            Third
          </Modal.Header>
          <Modal.Body slot="body">
            <Row>
              <Col>
                {!this.state[PanelName.FIRST] && (
                  <Button onClick={this.handleShowPanel(PanelName.FIRST)}>Open First</Button>
                )}
                <Button onClick={this.handleClosePanel(PanelName.THIRD)}>Close current</Button>
                <Button onClick={this.handleCloseAllModals}>Close all</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    )
  }
}