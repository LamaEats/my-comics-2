import { Request, apis } from '../utils'
import { mediator } from './mediator'

const { getter, setter } = mediator
const calculateOffset = (goToPage, count = 20) => (goToPage - 1) * count

export const submitRequest = section => async (dispatch, getState) => {
  dispatch(setter.isGetting(false))
  dispatch(setter.path(section))

  const state = getState()
  const params = getter.params(state)
  const path = getter.path(state)
  let sendParams = {}

  if (params) {
    sendParams = {
      ...sendParams,
      offset: calculateOffset(params.page, params.limit),
    }
  }

  const { data } = await Request.get(apis[path], {params: sendParams})
  const { results, offset, total, limit } = data

  dispatch(setter.params({
    offset, total, limit, page: params.page
  }))

  dispatch(setter.items(results))
  dispatch(setter.isGetting(true))
}
