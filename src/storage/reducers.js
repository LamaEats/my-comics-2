import { apis } from '../utils'
import { hasOwnProperty } from '@@Components/UI/utils/utils'


const initialState = {
  isGetting: false,
  path: '',
  items: [],
  params: {
    page: 1,
  },
  id: null,
  shownModal: false
}

const reducer = {
  getItems (state, { type }) {
    return {
      ...state,
      isGetting: false,
      path: apis[ type ],
    }
  },
  receivedItems (state, { items, params, isAppend }) {
    return {
      ...state,
      isGetting: true,
      items: isAppend ? [ ...state.items, ...items ] : [ ...items ],
      params,
    }
  },
  changePage (state, { page = 1 }) {
    return {
      ...state,
      params: {
        ...state.params,
        page,
      },
    }
  },
  setItemId (state, { id }) {
    return {
      ...state,
      id
    }
  },
  dropItemId (state) {
    return {
      ...state,
      id: null
    }
  },
  dropItems (state) {
    return {
      ...state,
      items: [],
      params: {},
    }
  },

  showModal (state) {
    return {
      ...state,
      shownModal: true
    }
  },
  closeModal (state) {
    return {
      ...state,
      shownModal: false
    }
  }
}

export default function (state, { type, payload }) {
  if (!hasOwnProperty.call(reducer, type)) return initialState
  if (!state) state = { ...initialState }

  reducer.state = { ...state }

  return reducer[type](state, { ...payload })
}
