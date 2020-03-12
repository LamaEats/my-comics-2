import {
  createGridElement
} from './createGridElement'
import {
  makeClassNames
} from '../utils'

const SIZES = [
  'XS', 'SM', 'MD', 'LG', 'XL'
]

const generateSpace = () => {
  const baseClass = 'space'
  return SIZES.reduce((acc, size) => {
    const classNames = makeClassNames(baseClass, `${baseClass}-${size.toLowerCase()}`)
    acc[size] = () => createGridElement({
      props: {
        className: classNames
      }
    })

    return acc
  }, {})
}

export const Space = generateSpace()
