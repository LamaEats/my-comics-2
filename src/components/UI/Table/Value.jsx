import React from 'react'

export const TableValue = ({children, content, formatter, row, ...rest}) => (
  <td className="table--row-cell" >
    {
      children
      || formatter && formatter(row, content)
      || content
    }
  </td>
)
