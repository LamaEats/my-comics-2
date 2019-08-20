import { Request } from '../utils'


export const getItems = (type) => ({
  type: 'getItems',
  payload: {type},
})

export const receivedItems = (items, params, isAppend) => ({
  type: 'receivedItems',
  payload: {
    items,
    params,
    isAppend,
  },
})

export const changePage = page => ({
  type: 'changePage',
  payload: {
    page,
  },
})

export const setItemId = id => ({
  type: 'setItemId',
  payload: {
    id,
  },
})

export const dropItemId = () => ({type: 'dropItemId'})

export const dropItems = () => ({type: 'dropItems'})


export function submitRequest (type, isAppend = false) {
  return (dispatch, getState) => {
    dispatch(getItems(type))

    const {path, params} = getState()
    let sendParams = {}

    if (params) {
      sendParams = {
        ...sendParams,
        offset: calculateOffset(params.page)(params.limit),
      }
    }

    return Request.get(path, {params: sendParams})
      .then(({data}) => {
        const {results, offset, total, limit} = data
        return dispatch(receivedItems(results, {offset, total, limit, page: params.page}, isAppend))
      })
      .catch((error) => {
        return dispatch(getItems(type))
      })
  }
}

export const showModal = () => ({ type: 'showModal' });
export const closeModal = () => ({ type: 'closeModal' });

const calculateOffset = (goToPage) => (count = 20) => (goToPage - 1) * count
