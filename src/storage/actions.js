import { Request } from '../utils'

export function getItems (type) {
    return {
        type: 'getItems',
        payload: { type }
    }
}

export function receivedItems (items, params) {
    return {
        type: 'receivedItems',
        payload: {
            items,
            params
        }
    }
}

export function changePage(page) {
    return {
        type: 'changePage',
        payload: {
            page
        }
    }
}

export function submitRequest (type) {
    return (dispatch, getState) => {
        dispatch(getItems(type));

        const { path, params } = getState();

        console.log(params)

        return Request.get(path, params)
            .then(({data}) => {
                const { results, offset, total, count } = data;
                return dispatch(receivedItems(results, {offset, total, count}))
            })
    }
}