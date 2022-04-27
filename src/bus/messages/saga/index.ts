// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { postMessageAction, watchPostMessage, PostMessageObj } from './postMessage';
import { useTogglersRedux } from '../../client/togglers';


export const useMessagesSaga = () => {
    const dispatch = useDispatch();
    const { setTogglerAction } = useTogglersRedux();

    return {
        fetchMessages: () => {
            dispatch(fetchMessagesAction(1));
        },
        postMessage: (msgObj: PostMessageObj) => {
            dispatch(postMessageAction(msgObj));
            setTogglerAction({
                type:  'isLoading',
                value: false,
            });
        },
    };
};

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages), call(watchPostMessage) ]);
}
