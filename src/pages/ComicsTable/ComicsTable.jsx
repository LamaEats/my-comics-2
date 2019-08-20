import React, { Component } from 'react'
import { connect } from 'react-redux'
import UIComponents from '@@Components'
import { submitRequest } from '../../storage/actions'


const {
  Table: {
    Table,
    TableCol,
  },
  EllipsisValue,
  Cover,
} = UIComponents


@connect((state, props) => {
  let {page} = props.match.params

  if (!page) page = 1

  return {
    ...state,
    page: +page,
  }
}, {
  submitRequest
})

export class ComicsTable extends Component {
  componentWillMount () {
   this.props.submitRequest('comics')
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.page === this.props.page) {
      return false
    }
    this.props.submitRequest('comics')
  }

  creators = ({creators}) => {
    const {available, items} = creators

    if (!available) return <i>Not available</i>
    const creator = ({name, role}, key) => {
      return (
        <p key={key}>{this.colHeader(name)} - {role}</p>
      )
    }

    return available <= 2 ? items.map(creator) : items.slice(0, 2).map(creator)
  }

  cover = ({ thumbnail: {path, extension}, title, name } = {}) => (
    <Cover path={`${path}/standard_small.${extension}`} alt={title || name} />
  )

  colHeader = (title) => (<b>{title}</b>)

  render () {
    const {isGetting, items, pagerData, match} = this.props

    return (
      <Table list={items} align='middle'>
        <TableCol
          prop={''}
          header={this.colHeader('Cover')}
          formatter={this.cover}
        />
        <TableCol
          prop='title'
          header={this.colHeader('Title')}
        />
        <TableCol
          prop='series.name'
          header={this.colHeader('Series')}
        />
        <TableCol
          prop='format'
          header={this.colHeader('Format')}
        />
        <TableCol
          header={this.colHeader('Creators')}
          formatter={this.creators}
        />
      </Table>
    )
  }
}
