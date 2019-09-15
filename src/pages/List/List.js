import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import UIComponents from '@@Components'
import {
  submitRequest,
  changePage,
  dropItems,
  setItemId,
  dropItemId,
  showModal,
  closeModal,
} from '../../storage/actions'


const {
  Grid: {
    Grid,
    Row,
    Col,
    Space,
  },
  Card,
  Loader,
  Pager,
  Title,
  Plural,
  Modal,
  utils: {batchBy, truncate},
} = UIComponents


@connect((state, props) => {
  let {section, page} = props.match.params
  let params = {...state.params}
  if (page) params = {...params, page: +page}


  return {
    ...state,
    params,
    section,
  }
}, {
  submitRequest,
  changePage,
  dropItems,
  setItemId,
  dropItemId,
  showModal,
  closeModal,
})

class List extends Component {
  componentDidMount () {
    const {submitRequest, section} = this.props
    submitRequest(section)
  }

  componentDidUpdate (prevProps) {
    const {submitRequest, changePage, section: currentSection, params: {page}} = this.props
    const {section: prevSection, params: {page: prevPage}} = prevProps

    let section = prevSection
    if (currentSection === section) {
      if (page !== prevPage) {
        changePage(page)
      }
      else {
        return undefined
      }
    }
    else {
      changePage(1)
      section = currentSection
    }

    submitRequest(section)
  }

  componentWillUnmount () {
    this.props.dropItems()
  }

  onChangePage = (_, page) => {
    this.props.changePage(page)
    this.props.history.push(
      this.props.match.path
        .replace(':section', this.props.section)
        .replace(':page?', page),
    )
  }

  onCardClickHandler = (id) => () => {
    this.props.setItemId(id)
    this.props.showModal()
  }

  onModalClose = () => {
    this.props.closeModal()
    this.props.dropItemId()
  }

  RenderItems = () => {
    const {items} = this.props

    if (!items.length) return null

    return batchBy(4)(items).map((row, rowIndex) => (
      <Fragment key={rowIndex}>
        <Row>
          {row.map((item, index) => (
            <Col key={index} col={3}>
              <Card ligth onClick={this.onCardClickHandler(item.id)}>
                <Card.Cover
                  slot="cover"
                  circle={this.props.section === 'heroes'}
                  heading={item.title || item.name}
                  path={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}
                />
                <Title level={4} slot="heading">
                  {item.title || item.name}
                </Title>
                <Card.Description slot="description" description={truncate(item.description, 100)}/>
              </Card>
            </Col>
          ))}
        </Row>
        <Space.XL/>
      </Fragment>
    ))
  }

  RenderModal = () => {
    const item = this.props.items.find(({id: uid}) => this.props.id === uid) || {}
    const {title, name, description} = item

    return (
      <Modal onClose={this.onModalClose} shown={this.props.shownModal}>
        <Modal.Header slot="header">
          {title || name || ''}
        </Modal.Header>
        <Modal.Body slot="body">
          {description || ''}
        </Modal.Body>
      </Modal>
    )
  }


  render () {
    const {RenderItems, RenderModal} = this
    const {isGetting, params: {total = 0}, params} = this.props

    return (
      <Loader isLoading={!isGetting}>
        <Title level={1}>
          {this.props.section.toUpperCase()}
          {total && (
            <span style={{marginLeft: 'auto', fontSize: '0.7em', opacity: 0.7}}>
              Found: <Plural count={total || 0} one='result' two='results' five='results'/>
            </span>
          )}
        </Title>
        <Grid>
          <RenderItems/>
          <Row justify='center' align='center'>
            <Col col={12}>
              <Pager {...params} step={5} onChangePage={this.onChangePage}/>
            </Col>
          </Row>
        </Grid>
        <RenderModal/>
      </Loader>
    )
  }
}

export default List