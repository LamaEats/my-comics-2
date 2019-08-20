import { plural } from '../utils/utils'


export const Plural = ({count, one, two, five}) => count
  ? `${count} ${ plural(count, [one, two, five])}`
  : `No ${five}`
