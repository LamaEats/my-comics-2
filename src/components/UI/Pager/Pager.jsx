import React from 'react'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'
import { range } from './utils'


export const Pager = ({
  limit,
  offset,
  total,
  step = 3,
  onChangePage,
}) => {
  if (!limit && !offset && !total) return null

  const currentPage = Math.ceil(offset / limit) + 1
  const maxPage = Math.ceil(total / limit)
  const from = currentPage - step < 1 ? 1 : currentPage - step
  const to = currentPage + step > maxPage ? maxPage : currentPage + step
  const rangeArray = range(from, to)
  const MakeButtons = {
    range: () => rangeArray.map((page, index) => Button({
        disabled: page === currentPage,
        value: page,
        label: page,
        className: page === currentPage && 'active',
        key: index,
        onClick: onChangePage
      })),
    next: () => Button({
      disabled: to === maxPage,
      value: maxPage,
      text: true,
      label: '››',
      className: 'next',
      onClick: onChangePage
    }),
    prev: () => Button({
      disabled: currentPage === 1,
      value: 1,
      text: true,
      label: '‹‹',
      className: 'prev',
      onClick: onChangePage
    }),
  }

  return (
    <ButtonGroup className="pager">
      <MakeButtons.prev />
      <MakeButtons.range />
      <MakeButtons.next />
    </ButtonGroup>
  )
}
