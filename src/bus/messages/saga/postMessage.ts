// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { POST_MESSAGE_PATH } from '../../../init/constants';

// Action
import { fetchMessagesAction } from './fetchMessages';
export const postMessageAction = createAction<PostMessageObj>(`${sliceName}/POST_MESSAGES_ASYNC`);

// Types
export type PostMessageObj = {
    text: string
    username: string
}

// Saga
const postMessage = (callAction: ReturnType<typeof postMessageAction>) => makeRequest<PostMessageObj>({
    togglerType:  'isLoading',
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${POST_MESSAGE_PATH}`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    success: function* (result) {
        yield put(fetchMessagesAction(1));
    },
    // error: function* () {

    // }
});

// Watcher
export function* watchPostMessage(): SagaIterator {
    yield takeLatest(postMessageAction.type, postMessage);
}
