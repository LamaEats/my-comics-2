import { createMediator } from '../mediators/storeMediator'

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

export const mediator = createMediator('myComics', initialState);
