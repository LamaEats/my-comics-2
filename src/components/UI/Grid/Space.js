import { createGridElement } from './createGridElement'
import { makeClassNames } from '../utils/makeClassNames'

const SIZES = [
  'XS', 'SM', 'MD', 'LG', 'XL'
]

const generateSpace = ()  => {
  const baseClass = 'space'
  return SIZES.reduce((object, size) => {
    const classNames = makeClassNames(baseClass, `${baseClass}-${size.toLowerCase()}`)
    object[size] = () => createGridElement({props: {className: classNames}})

    return object
  }, {})
}

export const Space = generateSpace()
