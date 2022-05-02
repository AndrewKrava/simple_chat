// Types
import * as types from './types';

export const setMessages: types.SetMessages = (__, action) => {
    return action.payload;
};

export const addMessage: types.SetNewMessage = (state, action) => {
    if (state) {
        return [ action.payload, ...state ];
    }

    return [ action.payload ];
};

export const editMessage: types.SetNewMessage = (state, action) => {
    return state?.map((messageObj) => {
        return messageObj._id === action.payload._id ? action.payload : messageObj;
    });
};

export const deleteMessage: types.DeleteMessage = (state, action) => {
    return state?.filter((messageObj) => messageObj._id !== action.payload);
};
