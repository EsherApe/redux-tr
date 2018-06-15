import {ADD_ITEM, REMOVE_ITEM} from './actionTypes';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: {
            item
        }
    }
}

export function removeItem(index) {
    return {
        type: REMOVE_ITEM,
        payload: {
            index
        }
    }
}