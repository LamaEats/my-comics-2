import React, { Children } from 'react'
import { TableHeader } from './TableHeader'
import { Provider as TableProvider } from './context'
import { makeClassNames } from '../utils/makeClassNames'
import { isString, getValueByPath } from '../utils/utils'
import { TableValue } from '@@Components/UI/Table/Value'


export class Table extends React.Component {

  baseClassName = 'table'
  state = {
    headers: null
  }

  static defaultProps = {
    align: 'top',
  }

  static getDerivedStateFromProps = (props, state) => {
    const columns = Children.map(props.children, (({ props }) => ({...props})), {})
    return { ...state, columns }
  }

  makeColumn = (value, i) => <TableValue {...value} key={`${this.constructor.name}-column-${i}`} />
  MakeColumns = ({ row }) => this.state.columns.map((column, i) => this.makeColumn({
    ...column,
    content: !!column.prop && getValueByPath(row, column.prop),
    row,
  }, i))
  makeSimpleRow = (row, i) => {
    const {MakeColumns} = this
    return (
      <tr className={`${this.baseClassName}--row`} key={`${this.constructor.name}-row-${i}`}>
        <MakeColumns row={row} />
      </tr>
    )
  }

  MakeRows = () => React.createElement('tbody', {}, this.props.list.map(this.makeSimpleRow))

  render () {
    const { MakeRows } = this
    const { list, align } = this.props
    if (!list) return null
    const className = makeClassNames(this.baseClassName, {
      [`${this.baseClassName}-align-${align}`]: isString(align),
    })
    return (
      <TableProvider value={ list }>
        <table className={ className }>
          <TableHeader headers={this.state.columns.map(({ header }) => header)} />
          <MakeRows />
        </table>
      </TableProvider>
    )
  }
}
