// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Types
import { MessageType } from '../types';

// Tools
import { makeRequest } from '../../../tools/utils';
import { POST_MESSAGE_PATH } from '../../../init/constants';


export const postMessageAction = createAction<PostMessageObj>(`${sliceName}/POST_MESSAGES_ASYNC`);

// Types
export type PostMessageObj = {
    text: string
    username: string
}

// TODO error handling
// Saga
const postMessage = (callAction: ReturnType<typeof postMessageAction>) => makeRequest<MessageType>({
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
    success: function* (response) {
        yield put(messagesActions.addMessage(response));
    },
    // error: function* () {

    // }
});

// Watcher
export function* watchPostMessage(): SagaIterator {
    yield takeLatest(postMessageAction.type, postMessage);
}
