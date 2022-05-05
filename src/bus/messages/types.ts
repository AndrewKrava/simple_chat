// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type MessageType = {
    _id: string,
    username: string,
    text:string,
    createdAt: string,
    updatedAt: string
}

export type MessagesState = Array<MessageType> | null;

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>;

export type SetMessages = BaseContact<MessagesState>;

export type SetNewMessage = BaseContact<MessageType>;

export type DeleteMessage = BaseContact<string>;
