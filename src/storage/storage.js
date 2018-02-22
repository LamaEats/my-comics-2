import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers'


export default function (initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(
            reduxThunk
        )
    )
}