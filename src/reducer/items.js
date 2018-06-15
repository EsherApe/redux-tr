import {ADD_ITEM, REMOVE_ITEM} from '../actionTypes';

const initialState = {
    items: [
        {
            id: 1,
            text: 'item №1'
        },
        {
            id: 2,
            text: 'item №2'
        }
    ]
};

export default (itemsState = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign({}, itemsState, {
                items: [...itemsState.items, {id: payload.item.id, text: payload.item.text}]
            });
        case REMOVE_ITEM:
            return itemsState.filter((item, index) => payload.index !== index);
        default:
            return itemsState
    }
}