import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function (initialState) {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        reduxThunk,
      ),
    ),
  )
}
