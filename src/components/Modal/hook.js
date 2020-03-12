import {
  useState
} from 'react'

export const useModal = () => {

  const [open, setOpen] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [close, setClose] = useState(true)

  return {
    setOpen,
    setClose,
    open,
  }
}
