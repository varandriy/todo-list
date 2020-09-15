import {SET_TASKS } from '../actions/toDoListActions'

const initialState = []



export const todoItemsReducer = (state = initialState, action) => {
    switch (action.type) {   
        case SET_TASKS:
            return action.payload;
    }
    return state;
};


