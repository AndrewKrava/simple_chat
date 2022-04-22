// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    _id:      null,
    username: null,
};

export const authSlice = createSlice<types.AuthState, typeof reducers>({
    name: 'auth',
    initialState,
    reducers,
});

export const sliceName = authSlice.name;
export const authActions = authSlice.actions;
export default authSlice.reducer;
