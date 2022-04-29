// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { PUT_MESSAGE_PATH } from '../../../init/constants';

// Action
import { fetchMessagesAction } from './fetchMessages';

// Types
import { MessageType } from '../types';
import { PostMessageObj } from './postMessage';

export type PutMessage = {
    messageId: string
    messageObj: PostMessageObj

}

export const putMessageAction = createAction<PutMessage>(`${sliceName}/PUT_MESSAGES_ASYNC`);


// Saga
const putMessage = (callAction: ReturnType<typeof putMessageAction>) => makeRequest<MessageType>({
    // togglerType: 'isLoading',
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${PUT_MESSAGE_PATH}${callAction.payload.messageId}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload.messageObj),
        }),
    },
    tryEnd: function* () {
        yield put(fetchMessagesAction(1));
    },
    // error: function* () {

    // }
});

// Watcher
export function* watcPutMessage(): SagaIterator {
    yield takeLatest(putMessageAction.type, putMessage);
}
