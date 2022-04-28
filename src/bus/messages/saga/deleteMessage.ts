// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { DELETE_MESSAGE_PATH } from '../../../init/constants';

// Action
import { fetchMessagesAction } from './fetchMessages';

export const deleteMessageAction = createAction<string>(`${sliceName}/DELETE_MESSAGES_ASYNC`);


// Saga
const deleteMessage = (callAction: ReturnType<typeof deleteMessageAction>) => makeRequest<boolean>({
    // togglerType: 'isLoading',
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${DELETE_MESSAGE_PATH}${callAction.payload}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    success: function* (result) {
        yield put(fetchMessagesAction(1));
    },
    // error: function* () {

    // }
});

// Watcher
export function* watchDeleteMessage(): SagaIterator {
    yield takeLatest(deleteMessageAction.type, deleteMessage);
}
