// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type AuthState = {
    _id:      string | null,
    username: string | null,
    error?:   string
}

// Contracts
export type BaseContact<T = any> = CaseReducer<AuthState, PayloadAction<T>>;

export type RefreshAuth = BaseContact<AuthState>;

export type ErrorAuth = BaseContact<Error>;
