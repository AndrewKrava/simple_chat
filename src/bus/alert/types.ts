// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Alert = Array<any>
export type AlertState = Alert | null

// Contracts
export type BaseContact<T = any> = CaseReducer<AlertState, PayloadAction<T>>

// export type RemoveMessage = BaseContact<>;
