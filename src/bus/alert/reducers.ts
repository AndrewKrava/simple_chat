// Types
import * as types from './types';

export const setAlert: types.BaseContact<types.Alert> = (__, action) => {
    return action.payload;
};
