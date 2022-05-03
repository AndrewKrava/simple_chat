// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const alertSlice = createSlice<types.AlertState, typeof reducers>({
    name: 'alert',
    initialState,
    reducers,
});

export const sliceName = alertSlice.name;
export const alertActions = alertSlice.actions;
export default alertSlice.reducer;
