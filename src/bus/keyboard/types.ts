// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeyboardState = boolean

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardState, PayloadAction<T>>

export type SwitchKeyboard = BaseContact<boolean>;
