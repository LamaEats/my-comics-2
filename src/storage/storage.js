import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux'
import reduxThunk from 'redux-thunk'
import {
  mediator
} from './mediator'


// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function (initialState = {}) {
  return createStore(
    combineReducers({
      [mediator.name]: mediator.reducer,
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(
        reduxThunk,
      ),
    ),
  )
}
