// Types
import * as types from './types';

export const setAuth: types.RefreshAuth = (_, action) => {
    return action.payload;
};

export const errorAuth: types.ErrorAuth = (_, action) => {
    return {
        _id:      null,
        username: null,
        error:    action.payload.message,
    };
};

export const removeError: types.RemoveError = () => {
    return {
        _id:      null,
        username: null,
        error:    void 0,
    };
};
