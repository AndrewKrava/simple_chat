// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { FETCH_MESSAGES_PATH } from '../../../init/constants';

// Action
export const fetchMessagesAction = createAction<number>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { MessagesState } from '../types';

// Saga
const fetchMessages = (callAction: ReturnType<typeof fetchMessagesAction>) => makeRequest<MessagesState>({
    togglerType:  'isLoading',
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${FETCH_MESSAGES_PATH}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    success: function* (result) {
        yield put(messagesActions.setMessages(result));
    },
});

// Watcher
export function* watchFetchMessages(): SagaIterator {
    yield takeLatest(fetchMessagesAction.type, fetchMessages);
}
