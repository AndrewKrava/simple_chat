// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { postMessageAction, watchPostMessage, PostMessageObj } from './postMessage';
import { deleteMessageAction, watchDeleteMessage } from './deleteMessage';
import { putMessageAction, watcPutMessage, PutMessage } from './putMessage';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => {
            dispatch(fetchMessagesAction(1));
        },
        postMessage: (msgObj: PostMessageObj) => {
            dispatch(postMessageAction(msgObj));
        },
        deleteMessage: (msgId: string) => {
            dispatch(deleteMessageAction(msgId));
        },
        putMessage: (msgObj: PutMessage) => {
            dispatch(putMessageAction(msgObj));
        },
    };
};

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages), call(watchPostMessage), call(watchDeleteMessage), call(watcPutMessage) ]);
}
