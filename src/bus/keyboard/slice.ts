// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = false;

export const keyboardSlice = createSlice<types.KeyboardState, typeof reducers>({
    name: 'keyboard',
    initialState,
    reducers,
});

export const sliceName = keyboardSlice.name;
export const keyboardActions = keyboardSlice.actions;
export default keyboardSlice.reducer;
