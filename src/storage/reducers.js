import { apis } from '../utils'

const reducer = {
    state: {
        isGetting: false,
        path: '',
        items: [],
        page: 1,
        pagerData: {}
    },

    getItems ({type}) {
        return {
            ...this.state,
            isGetting: false,
            path: apis[type]
        }
    },
    receivedItems ({items, params}) {
        return {
            ...this.state,
            isGetting: true,
            items: [...items],
            pagerData: {...params}
        }
    },
    changePage ({page = 1}) {
        return {
            ...this.state,
            page
        }
    }
};

export default function (state, {type, payload}) {
    if (!reducer.hasOwnProperty(type)) {
        return;
    }

    console.log(state)

    if (!state) {
        state = {...reducer.state}
    } else {
      reducer.state = {...state};
    }

    return reducer[type]({...payload});
}