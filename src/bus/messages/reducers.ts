// Types
import * as types from './types';

export const setMessages: types.SetMessages = (__, action) => {
    return action.payload;
};
