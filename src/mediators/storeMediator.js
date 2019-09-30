import { forEach, keys } from '@@Components/UI/utils/utils'


export const createSelector = (state, ...stateGetters) => stateGetters.reduce(
  (partialState, stateGetter) => {
    if (typeof stateGetter !== 'function') return partialState

    const nextPartialState = stateGetter(partialState)

    if (typeof nextPartialState === 'undefined') return {}

    return nextPartialState
  }, state)

const getActionCreator = namespace => (type, actionFn) => {
  const action = (...args) => ({
    type: `${namespace}/${type}`,
    payload: actionFn(...args),
  })

  action.toString = () => type

  return action
}

const getActionHandler = namespace => (actionHandlersMap, defaultState) => {
  const actionKeys = keys(actionHandlersMap)

  const handlers = actionKeys.reduce((result, actionName) => {
    result[`${namespace}/${actionName}`] = actionHandlersMap[actionName]
    return result
  }, {})

  return (state, action) => {
    const currentState = state || defaultState
    const handler = handlers[action.type]
    return typeof handler === 'function' ? handler(currentState, action) : currentState
  }
}

export const createMediator = (namespace, initialState) => {
  const stateKeys = keys(initialState)
  const actionCreator = getActionCreator(namespace)
  const handleActions = getActionHandler(namespace)

  const resetState = actionCreator('RESET', () => undefined)

  const setter = stateKeys.reduce((setters, actionType) => {
    setters[actionType] = actionCreator(actionType, (value) => ({value}))
    return setters
  }, {resetState})

  const getter = state => createSelector(state, partialState => partialState[namespace])

  forEach(stateKeys, (key) =>
    Object.defineProperty(getter, key, {
      enumerable: true,
      configurable: false,
      writable: false,
      value: state => createSelector(state, getter, partialState => partialState[key]),
    }),
  )

  const handler = stateKeys.reduce((handlers, actionType) => {
    handlers[setter[actionType]] = (state, {payload: {value}}) => ({...state, [actionType]: value})
    return handlers
  }, {
    [resetState]: () => initialState,
  })

  return {
    getter,
    setter,
    reducer: handleActions(handler, initialState),
    name: namespace,
  }
}
